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


// Auth::routes();

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::resource('/home', 'TopController');

// ログイン
Route::get('/login', function () {
    return view('login');
})
->where('any', '.*');

// コーパス管理画面
Route::get('/corpus/{any}', function () {
    return view('corpusadmin');
})
->where('any', '.*');

// ダッシュボード
Route::get('/{any}', function () {
    return view('dashboard');
})
->where('any', '.*');