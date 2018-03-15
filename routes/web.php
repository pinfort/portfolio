<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get(
    '/',
    function () {
        return view('welcome');
    }
);

Route::group(
    ['prefix' => 'auth'],
    function () {
        Auth::routes();
    }
);

// JSから読めるようにするものリスト
Route::group(
    ['laroute' => true],
    function () {
        Route::get('/home', function () {
            return view('index');
        })->name('home');

        // JSから読めるもので認証が必要
        Route::group(
            ['middleware' => 'auth'],
            function () {
                Route::get('/admin', function () {
                    return view('index');
                })->name('admin');
                Route::get('/admin/licenses', function () {
                    return view('index');
                })->name('admin_licenses');
                Route::get('/admin/skills', function () {
                    return view('index');
                })->name('admin_skills');
            }
        );
    }
);
