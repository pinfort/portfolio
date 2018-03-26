<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Account;
use Illuminate\Support\Facades\Auth;

class AccountsController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::check()) {
            return Account::with('service')->get();
        } else {
            return Account::with('service')->where('visible', true)->get();
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'service_id' => 'required|integer',
            'user_name' => 'required|string|max:255',
            'user_page_link' => 'required|url',
            'description' => 'string',
            'visible' => 'boolean',
        ]);
        $created = Account::create($validatedData);
        $created = Account::with('service')->where('id', $created->id)->first();
        $data = [
            'status' => 200,
            'data' => [
                'account' => $created,
            ],
        ];
        return response()->json($data);
    }

    public function destroy(Request $request, $id)
    {
        $account = Account::find($id);
        $account->delete();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }
}
