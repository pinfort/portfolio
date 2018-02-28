<?php

use Illuminate\Http\Request;

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

Route::middleware(['auth:api'])->group(
    function () {
        Route::post('/accounts', 'Api\AccountsController@store');
        Route::post('/services', 'Api\ServicesController@store');
        Route::post('/licenses', 'Api\LicensesController@store');
    }
);

Route::get('/accounts', 'Api\AccountsController@index')->name('api.accounts');
Route::get('/services', 'Api\ServicesController@index')->name('api.services');
Route::get('/licenses', 'Api\LicensesController@index')->name('api.licenses');
