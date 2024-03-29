<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Message;
use Illuminate\Support\Facades\URL;

class UserController extends Controller
{
    public function userValidate(Request $request)
    {
        $Objectuser = new User();
        $user = $Objectuser->validateUser($request);
        //valido que  la respuesta sea un usuario o no
        if (is_object($user)) {
            return response()->json($user);
        } else if ($user == 'Contrasenia erronea') {
            return response()->json("Contraseña erronea");
        } else {
            return response()->json("Usuario no encontrado");
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->isJson()) {
            $data = $request->json()->all();
            $validate = "Usuario creado con éxito";
            if ($data["password1"] != $data["password"]) {
                $validate = 'contrasenias no iguales';
            } else {
                try {
                    $result = DB::table('users')->insert([
                        'name' => $data["name"],
                        'email' => $data["email"],
                        'password' => $data["password"],
                        'dateBirth'=>Carbon::now(),
                        'pleasures' => $data["pleasures"],
                        'profession'  => $data["profession"],
                        'description' => $data["description"],
                        'numbre_phone' => $data["numbre_phone"],
                        'role_id'=>$data["rol_id"]
                    ]);
                } catch (Exception $e ) {
                    $validate = $e->getMessage() ;
                }
            }
            return response()->json($validate);
        }
    }

    public function update(Request $request, User $user){
         $request->validate(['image'=>'required|image']);//valido que llegue una imagen 


        $validate = "actualizado";
        try {
            
            $imageUrl= $request->image->store('public') ; //guardo imagen (storage/app/public) y ulr

            $user->name= $request->name;
            $user->password = $request->password;
            $user->pleasures = $request->pleasure;
            $user->profession = $request->profession;
            $user->description = $request->description;
            $user->numbre_phone = $request->numbre_phone;
            $user->save();
            
        } catch (Exception $e) {
            $validate = $e->getMessage();
        }
        return response()->json($validate);     
    }

    public function edit(Request $request){
        return $user = User::find($request->id);
    }
}
