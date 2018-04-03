<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SkillCategory extends Model
{
    protected $fillable = [
        'name',
    ];

    public function skills()
    {
        return $this->hasMany('App\Skill');
    }
}
