<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    public function introduction(Request $request)
    {
        // とりあえずプライマリキーで一人目を返す（二人以上登録するような構造にする気はないので）
        $user = User::first();
        $data = [
            'status' => 200,
            'data' => [
                'user_introduction' => $user->introduction,
            ],
        ];
        return response()->json($data);
    }

    public function introductionUpdate(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
        } else {
            $data = [
                'status' => 401,
                'message' => 'authentication required',
            ];
            return response()->json($data);
        }
        $validatedData = $request->validate([
            'introduction' => 'string|required',
        ]);
        $user->introduction = $validatedData['introduction'];
        $user->save();
        $data = [
            'status' => 200,
            'data' => [
                'user' => $user,
            ],
        ];
        return response()->json($data);
    }
}
