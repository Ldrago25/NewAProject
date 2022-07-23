<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    
    public function likes(){
        return $this->belongsToMany('App\Models\like');
    }

    public function comments(){
        return $this->belongsToMany('App\Models\comment');
    }
}
