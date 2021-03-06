<?php

use Illuminate\Http\Request;

// 認証キーの発行
Route::post('authenticate','UserController@authenticate');

// コンテンツルート
// Route::group(['middleware' => 'jwt.auth'], function () {
  Route::prefix('v1')->group(function () {
    // ユーザー情報のCRUD
    Route::resource('users', 'UserController');
    Route::get('me', 'UserController@getCurrentUser');

    // コーパスのCRUD
    Route::resource('corpus', 'CorpusController');

    // AI学習可否
    Route::get('corpus/{corpus_id}/learnable', 'LearningController@learnable');
    // AI学習実行
    Route::get('corpus/{corpus_id}/learn', 'LearningController@learn');

    // 教師データのCRUD
    Route::resource('training-data', 'TrainingDataController')->except([
      'index', 'edit' // このルートは除外
    ]);
    Route::post('training-data/{corpus_id}/upload', 'TrainingDataController@upload');
    Route::get('training-data/{corpus_id}/download', 'TrainingDataController@download');
    Route::get('training-data/sample/download', 'TrainingDataController@downloadSample');



  });
// });


// curl -GET 127.0.0.1:8000/api/users -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
// eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYXV0aGVudGljYXRlIiwiaWF0IjoxNTMzMTc0NDM0LC
// JleHAiOjE1MzMxNzgwMzQsIm5iZiI6MTUzMzE3NDQzNCwianRpIjoiYkdYVnc3N3E4S0k2U0hnZiJ9.Pt7Atasn3zSgHWzQYXESwPn2hh49jzoH2ScsHWmTtc4'