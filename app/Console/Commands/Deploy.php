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
     * @return mixed
     */
    public function handle()
    {
        $this->info(shell_exec('git checkout origin/'.$this->argument('branch')));
        $this->info(shell_exec('git pull origin '.$this->argument('branch')));

        \Artisan::call('migrate');
        $this->info(shell_exec('yarn run prod'));
    }
}
