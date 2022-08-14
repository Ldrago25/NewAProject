<?php

namespace App\Http\Controllers;

use App\Models\Roomuser;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoomuserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->isJson()){
            $data = $request->json()->all();
            try {   
                $roomuser = new Roomuser();
                $roomuser->user_id = $data['user_id'];
                $roomuser->room_id = $data['room_id'];
                $roomuser->save();
            } catch (\Exception $ex) {
                $validate = $ex->getMessage();
            }
            return response()->json($validate);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Roomuser  $roomuser
     * @return \Illuminate\Http\Response
     */
    public function show(Roomuser $roomuser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Roomuser  $roomuser
     * @return \Illuminate\Http\Response
     */
    public function edit(Roomuser $roomuser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Roomuser  $roomuser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Roomuser $roomuser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Roomuser  $roomuser
     * @return \Illuminate\Http\Response
     */
    public function destroy(Roomuser $roomuser)
    {
        //
    }
}
