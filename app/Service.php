<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'url',
        'icon_path',
    ];

    public function accounts()
    {
        return $this->hasMany('App\Account');
    }
}
