<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Work;

class WorksController extends Controller
{
    public function index(Request $request)
    {
        return Work::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'string|max:255',
            'url' => 'string|max:255',
            'source_url' => 'string|max:255',
        ]);

        $created = Work::create($validatedData);
        $data = [
            'status' => 200,
            'data' => [
                'work' => $created,
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
