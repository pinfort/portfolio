<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Skill;

class SkillsController extends Controller
{
    public function index(Request $request)
    {
        return Skill::with('category')->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'skill_category_id' => 'required|number',
            'description' => 'string|max:255',
            'status' => 'required|string|max:255',
        ]);

        Skill::create($validatedData);
        return redirect()->route('home');
    }
}
