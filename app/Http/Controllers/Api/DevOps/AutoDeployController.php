<?php

namespace App\Http\Controllers\Api\DevOps;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\Process\Process;

class AutoDeployController extends Controller
{
    public function index(Request $request)
    {
        if (is_null(config('dev_ops.token')) or is_null(config('dev_ops.branch'))) {
            return abort(404);
        }

        if ($request->input('deploy_token') !== config('dev_ops.token')) {
            return abort(403);
        }

        // $job = new Process(PHP_BINARY.' '.base_path('artisan').' deploy '.config('dev_ops.branch'));
        // $job->start();
        $output = new BufferedOutput();
        $status = \Artisan::call('deploy', ['branch' => config('dev_ops.branch')], $output);
        $response_code = $status === 0 ? 200 : 500;
        return response(
            $output->fetch(),
            $response_code
        )->header('Content-Type', 'text/plain');
    }
}
