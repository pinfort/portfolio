<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\SkillCategory;

class SkillCategoriesController extends Controller
{
    public function index(Request $request)
    {
        return SkillCategory::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        SkillCategory::create($validatedData);
        return redirect()->route('home');
    }
}
