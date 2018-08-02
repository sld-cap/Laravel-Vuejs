<?php

use Illuminate\Http\Request;

// 認証キーの発行
Route::post('authenticate','UserController@authenticate');

// 既存ユーザー情報の管理
Route::group(['middleware' => 'jwt.auth'], function () {
  Route::resource('users', 'UserController');
  Route::get('me',  'UserController@getCurrentUser');
});


// curl -X GET 127.0.0.1:8000/api/users -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYXV0aGVudGljYXRlIiwiaWF0IjoxNTMzMTc0NDM0LCJleHAiOjE1MzMxNzgwMzQsIm5iZiI6MTUzMzE3NDQzNCwianRpIjoiYkdYVnc3N3E4S0k2U0hnZiJ9.Pt7Atasn3zSgHWzQYXESwPn2hh49jzoH2ScsHWmTtc4'