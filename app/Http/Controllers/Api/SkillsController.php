<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Skill;

class SkillsController extends Controller
{
    public function index(Request $request)
    {
        return Skill::with('skill_category')->orderBy('name', 'ASC')->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'skill_category_id' => 'required|integer',
            'description' => 'string|max:255',
            'status' => 'required|string|max:255',
        ]);

        $created = Skill::create($validatedData);
        $created = Skill::with('skill_category')->where('id', $created->id)->first();
        $data = [
            'status' => 200,
            'data' => [
                'skill' => $created,
            ],
        ];
        return response()->json($data);
    }

    public function destroy(Request $request, $id)
    {
        $skill = Skill::find($id);
        $skill->delete();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }
}
