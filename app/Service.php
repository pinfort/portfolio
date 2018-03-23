<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Service extends Model
{
    protected $fillable = [
        'name',
        'url',
        'icon_path',
    ];

    protected $appends = [
        'icon_url',
    ];

    public function accounts()
    {
        return $this->hasMany('App\Account');
    }

    public function getIconUrlAttribute()
    {
        return Storage::url($this->icon_path);
    }
}
