<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
        $this->info('checking out branch to '.$this->argument('branch'));
        exec('git checkout origin/'.$this->argument('branch'), $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to checking out branch '.$this->argument('branch'));
            unset($out);
            unset($return_var);
            return 1;
        }
        unset($out);
        unset($return_var);

        $this->info('pulling new data from github.');
        exec('git pull origin '.$this->argument('branch'), $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to pull new data from github');
            unset($out);
            unset($return_var);
            return 1;
        }
        unset($out);
        unset($return_var);

        $this->info('migrating database');
        if ($this->call('migrate') !== 0) {
            $this->error('failed to migrate database');
            return 1;
        }

        $this->info('building javaScript');
        exec('yarn run prod', $out, $return_var);
        if ($return_var !== 0) {
            $this->error('failed to build javaScript');
            unset($out);
            unset($return_var);
            return 1;
        }
        unset($out);
        unset($return_var);
        return 0;
    }
}
