<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function introduction(Request $request)
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
            'introduction' => 'string',
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
