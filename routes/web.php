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
        Route::get('/', function () {
            return view('index');
        })->name('home');
        Route::get('/works/{id}', function () {
            return view('index');
        })->name('work_detail');
        Route::get('/tags/{id}', function () {
            return view('index');
        })->name('tag_detail');
        Route::get('/privacy', function () {
            return view('index');
        })->name('privacy');

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
                Route::get('/admin/skills/categories', function () {
                    return view('index');
                })->name('admin_skill_categories');
                Route::get('/admin/works', function () {
                    return view('index');
                })->name('admin_works');
                Route::get('/admin/services', function () {
                    return view('index');
                })->name('admin_services');
                Route::get('/admin/accounts', function () {
                    return view('index');
                })->name('admin_accounts');
                Route::get('/admin/introduction', function () {
                    return view('index');
                })->name('admin_introduction');
            }
        );
    }
);
