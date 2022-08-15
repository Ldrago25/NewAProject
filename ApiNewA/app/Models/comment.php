<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Comment extends Model
{
    use HasFactory;

    public function comentariosUsers(Request $request){

        try {
            // $consulta = DB::table('Comments')->select('name','text','date_creation')->join('users','comments.user_id','=','users.id')->where('ticket_id',$request->ticket_id)->get();
            $consulta = Comment::select('name','text','date_creation')->join('users','comments.user_id','=','users.id')->where('ticket_id',$request->ticket_id)->get();
            return $consulta;
        } catch (Exception $e) {
            return $e->getMessage();
        }

    }
}
