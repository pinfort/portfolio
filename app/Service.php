<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    public function accounts()
    {
        return $this->hasMany('App\Account');
    }
}
