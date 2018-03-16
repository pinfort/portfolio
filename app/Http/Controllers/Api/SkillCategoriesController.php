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

        $created = SkillCategory::create($validatedData);
        $data = [
            'status' => 200,
            'data' => [
                'skill_category' => $created,
            ],
        ];
        return response()->json($data);
    }

    public function destroy(Request $request, $id)
    {
        $skill_category = SkillCategory::find($id);
        $skill_category->delete();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }
}
