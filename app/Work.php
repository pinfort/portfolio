<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'url', 'source_url',
    ];

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}