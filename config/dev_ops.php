<?php

return [
    'token' => env('DEPLOY_TOKEN', null),

    'branch' => env('DEPLOY_BRANCH', 'master'),

    'yarn_path' => env('DEPLOY_YARN_PATH', 'yarn')
];
