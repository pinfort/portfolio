<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Work;
use App\Tag;

class WorksController extends Controller
{
    public function index(Request $request)
    {
        return Work::with('tags')->get();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'url' => 'string|max:255',
            'source_url' => 'string|max:255',
            'tags' => 'string|max:255',
        ]);

        $tags = str_replace('　', ' ', $validatedData['tags']);
        $tags = trim($tags);
        $tags = preg_replace('/\s+/', ' ', $tags);
        $tags = explode(' ', $tags);
        $work = Work::create($validatedData);
        if (!($tags === '')) {
            $tag_ids = [];
            foreach ($tags as $tag) {
                $tag_instance = Tag::firstOrCreate(['name' => $tag]);
                $tag_ids[] = $tag_instance->id;
            }
            $work->tags()->attach($tag_ids);
            $work = Work::with('tags')->where('id', $work->id)->first();
        }
        $data = [
            'status' => 200,
            'data' => [
                'work' => $work,
            ],
        ];
        return response()->json($data);
    }

    public function destroy(Request $request, $id)
    {
        $work = Work::find($id);
        $work->delete();
        $data = [
            'status' => 200,
            'data' => [
                'id' => (int)$id,
            ],
        ];
        return response()->json($data);
    }
}
