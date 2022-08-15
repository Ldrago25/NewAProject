<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Bitacora extends Model
{
    use HasFactory;

    public function bitacoraUser(Request $request){
        try {
            $consulta = Bitacora::where('user_id','=',$request->user_id)->get();
            return $consulta;
        } catch ( Exception $e) {
            return $e->getMessage();
        }

    }
}
