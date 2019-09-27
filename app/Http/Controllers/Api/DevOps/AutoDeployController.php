<?php

namespace App\Http\Controllers\Api\DevOps;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Symfony\Component\Process\Process;

class AutoDeployController extends Controller
{
    public function index(Request $request) {
        if (is_null(config('dev_ops.token')) or is_null(config('dev_ops.branch'))) {
            return abort(404);
        }

        if ($request->input('deploy_token') !== config('dev_ops.token')) {
            return abort(403);
        }

        // $job = new Process(PHP_BINARY.' '.base_path('artisan').' deploy '.config('dev_ops.branch'));
        // $job->start();
        \Artisan::call('deploy '.config('dev_ops.branch'));
        return response()->json([
            'result'=> 'accepted',
        ]);
    }
}
