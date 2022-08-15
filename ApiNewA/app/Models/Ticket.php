<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Ticket extends Model
{
    use HasFactory;

    public function ticketOneUser(Request $request){

        try {
            $ticket = Ticket::where('user_id',$request->user_id)->get();
            // $ticket = DB::table('Tickets')->where('user_id',$request->user_id)->get();
            return response()->json($ticket);    
        } catch (Exception $e) {
            return $e->getMessage();
        }

    }
    
    public function likes(){
        return $this->belongsToMany('App\Models\like');
    }

    public function comments(){
        return $this->belongsToMany('App\Models\comment');
    }
}
