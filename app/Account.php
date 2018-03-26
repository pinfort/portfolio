<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'service_id',
        'user_name',
        'user_page_link',
        'description',
        'visible',
    ];

    public function service()
    {
        return $this->belongsTo('App\Service');
    }
}
