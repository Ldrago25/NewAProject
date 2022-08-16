<?php

use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\RoomuserController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user',[UserController::class,'userValidate']);
Route::post('/userRegister',[UserController::class,'store']);
Route::post('/ticketRegister',[TicketController::class, 'store']);
Route::post('/bitacoraRegister',[BitacoraController::class, 'store']);
Route::post('/categoryRegister',[CategoryController::class, 'store']);
Route::post('/commentRegister',[CommentController::class, 'store']);
Route::post('/roomRegister',[RoomController::class, 'store']);
Route::post('/messageRegister',[MessageController::class, 'store']);
Route::post('/roomuserRegister',[RoomuserController::class, 'store']);
Route::post('/likeRegister',[LikeController::class, 'store']);

Route::get('/ticketAll',[TicketController::class, 'show']);
Route::get('/ticketUser',[TicketController::class, 'entryUser']); // resibe user_id, devuelve todas las entradas de un usuario espesifico
Route::get('/comentariosAll',[CommentController::class, 'show']); // recibe ticket_id, devuelve todos los comentarios de una etiqueta,nnameUser,dateCreation
Route::get('/bitacoraUser',[BitacoraController::class, 'show']);  //recibe user_id, y debulve la bitacora del user
Route::get('/userEdit',[UserController::class, 'edit']); // recibe id del useuario y devuelve un array con el usuario
Route::put('/userUpdate',[UserController::class, 'update']); // recibe el request con los datos nuevos y ud obj del user y actualiza
Route::get('/ticketDestroy',[TicketController::class, 'destroy']);
