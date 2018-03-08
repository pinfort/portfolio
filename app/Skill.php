<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'skill_category_id',
        'description',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo('App\SkillCategory');
    }
}
