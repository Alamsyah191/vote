<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CalonController;
use App\Http\Controllers\PilihController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout']);
    Route::get('calon', [CalonController::class, 'index']);
    Route::post('store', [CalonController::class, 'store']);
    Route::post('calon/{calon}', [CalonController::class, 'update']);
    Route::post('del/{calon}', [CalonController::class, 'destroy']);


    Route::get('pilih', [PilihController::class, 'index']);
    Route::post('jos', [PilihController::class, 'store']);
    Route::post('pilih/{pilih}', [PilihController::class, 'update']);
    Route::post('hapus/{pilih}', [PilihController::class, 'destroy']);
});

Route::post('/register', [RegisterController::class, 'ss']);
Route::post('/login', [LoginController::class, 'login']);
