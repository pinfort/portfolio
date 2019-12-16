<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Deploy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deploy {branch}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatic deploy service';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $app_wd = getcwd();
        chdir(base_path());
        $this->info('checking out branch to '.$this->argument('branch'));
        exec('git checkout '.$this->argument('branch'), $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to checking out branch '.$this->argument('branch'));
            foreach ($out as $line) {
                $this->error($line);
            }
            unset($line);
            unset($out);
            unset($return_var);
            throw new Exception;
        }
        unset($out);
        unset($return_var);

        $this->info('checked out branch');
        $this->info(shell_exec('git show --oneline -s'));

        $this->info('pulling new data from github.');
        exec('git pull origin '.$this->argument('branch'), $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to pull new data from github');
            foreach ($out as $line) {
                $this->error($line);
            }
            unset($line);
            unset($out);
            unset($return_var);
            throw new Exception;
        }
        unset($out);
        unset($return_var);

        $this->info('pull data finished');
        $this->info(shell_exec('git show --oneline -s'));

        $this->info('installing php dependencies');
        exec(config('dev_ops.composer_path').' install 2>&1', $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to install php dependencies');
            foreach ($out as $line) {
                $this->error($line);
            }
            unset($line);
            unset($out);
            unset($return_var);
            throw new Exception;
        }
        unset($out);
        unset($return_var);

        $this->info('migrating database');
        if ($this->call('migrate', [
            '--force' => true,
        ]) !== 0) {
            $this->error('failed to migrate database');
            throw new Exception;
        }

        $this->info('installing js dependencies');
        exec(config('dev_ops.yarn_path').' install 2>&1', $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to install js dependencies');
            foreach ($out as $line) {
                $this->error($line);
            }
            unset($line);
            unset($out);
            unset($return_var);
            throw new Exception;
        }
        unset($out);
        unset($return_var);

        $this->info('generating laroutejs');
        if ($this->call('laroute:generate') !== 0) {
            $this->error('failed to generate laroute');
            throw new Exception;
        }

        $this->info('building javaScript');
        if (\App::environment('testing')) {
            $yarn_build_env = 'dev';
        } else {
            $yarn_build_env = 'prod';
        }
        exec(config('dev_ops.yarn_path').' run '.$yarn_build_env.' 2>&1', $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to build javaScript');
            foreach ($out as $line) {
                $this->error($line);
            }
            unset($line);
            unset($out);
            unset($return_var);
            throw new Exception;
        }
        unset($out);
        unset($return_var);

        $this->info('deploy finished.');
        chdir($app_wd);
        return 0;
    }

    public function info($string, $verbosity = null)
    {
        Log::info($string);
        parent::info($string, $verbosity);
    }

    public function error($string, $verbosity = null)
    {
        Log::error($string);
        parent::error($string, $verbosity);
    }
}
