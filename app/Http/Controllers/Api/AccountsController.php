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
        if (Auth::guard('api')->check() && !$request->input('guest')) {
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
            'description' => 'string|max:255',
            'visible' => 'required',
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
        $account = Account::findOrFail($id);
        $account->delete();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'service_id' => 'integer',
            'user_name' => 'string|max:255',
            'user_page_link' => 'url',
            'description' => 'string|max:255',
            'visible' => 'required',
        ]);
        $account = Account::findOrFail($id);
        $account->fill($validatedData);
        $account->save();
        $data = [
            'status' => 200,
            'data' => [
                'account' => $account,
            ],
        ];
        return response()->json($data);
    }

    public function visible(Request $request, $id)
    {
        $account = Account::findOrFail($id);
        $account->visible = true;
        $account->save();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }

    public function invisible(Request $request, $id)
    {
        $account = Account::findOrFail($id);
        $account->visible = false;
        $account->save();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }
}
