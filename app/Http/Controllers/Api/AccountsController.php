<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Account;

class AccountsController extends Controller
{
    public function index(Request $request)
    {
        return Account::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'service_id' => 'required|integer',
            'user_name' => 'required|string|max:255',
            'user_page_link' => 'required|url',
            'description' => 'string',
        ]);
        Account::create($validatedData);
        return redirect()->route('api.accounts');
    }
}
