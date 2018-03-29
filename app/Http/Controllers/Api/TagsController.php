<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller
{
    public function index(Request $request)
    {
        return Tag::all();
    }

    public function show(Request $request, $id)
    {
        return Tag::with('works')->findOrFail($id);
    }
}
