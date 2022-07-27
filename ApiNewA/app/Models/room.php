<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    public function messages(){
        return $this->belongsToMany('App\Models\message');
    }
    public function roomusers(){
        return $this->belongsToMany('App\Models\roomuser');
    }
}
