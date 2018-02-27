<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Service;

class ServicesController extends Controller
{
    public function index(Request $request)
    {
        return Service::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'url' => 'required',
            'icon' => 'image',
        ]);
        $icon_path = $request->file('icon')->store('services');
        $validatedData['icon_path'] = $icon_path;
        Service::create($validatedData);
        return redirect()->route('api.services');
    }
}
