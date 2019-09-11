<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Service extends Model
{
    protected $fillable = [
        'name',
        'url',
        'icon',
    ];

    public function accounts()
    {
        return $this->hasMany('App\Account');
    }
}
