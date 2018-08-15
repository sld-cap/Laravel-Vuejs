<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Models\Corpus;
use App\Models\CorpusCreative;
use App\Models\Business\ApiResponseFormatter;
use App\Models\Business\TrainingDataManager;
use App\User;

use Log;
use Validator;
use Carbon\Carbon;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class TrainingDataController extends Controller
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
   * 教師データを追加・更新する
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $_request)
  {
    // バリデーション
    $validate_result_response = $this->trainDataValidation($_request);

    if ($validate_result_response) {
      return $validate_result_response;
    }
    return "ok";

  }

  /**
   * 指定コーパスの教師データ一覧をJSONで返す
   *
   * @param  int  $_corpus_id
   * @return \Illuminate\Http\Response
   */
  public function show($_corpus_id)
  {
    try {
      $train_data = new TrainingDataManager($_corpus_id);
      $contents = $train_data->loadTrainingDataAll();
      $formatter = new ApiResponseFormatter(200, 'Find Successful.', $contents);

    } catch (ModelNotFoundException $e) {
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), array());
    }
    
    return response()->json($formatter->getResponseArray());
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }

  /**
   * バリデーション：教師データの登録・更新
   */
  protected function trainDataValidation($_request)
  {
    $form = $_request->all();
    unset($form['_token']);

    // 入力値バリデーション
    $validator = Validator::make($form, CorpusCreative::$create_rule, CorpusCreative::$create_error_messages);
    $validator->sometimes('add_class_name', 'required', function($input) {
      // クラスID未指定の場合は「クラス名」を必須項目としてチェックする
      return $input->corpus_class_id === null;
    });

    $validator->sometimes('corpus_id', 'required|numeric', function($input) {
      // コーパスID未指定の場合は「クラス名」を必須項目としてチェックする
      return true;
    });

    if ($validator->fails()) {
      // バリデーションエラーがあった場合は、400エラーを返す
      $errors = array();
      foreach ($validator->errors()->toArray() as $key => $value) {
        $errors[] = array(
          'field_id' => $key,
          'message' => $value[0] // validatorのmessegeが配列で帰ってくるので0指定
        ); 
      }

      $formatter = new ApiResponseFormatter(400, 'validation error.', $errors);
      return response()->json($formatter->getResponseArray());
    }

    // 指定されたコーパスの不正チェック
    $user = JWTAuth::parseToken()->authenticate();
    $my_corpus = Corpus::where('id', $form['corpus_id'])
        ->where('company_id', $user->company_id)
        ->count();

    if ($my_corpus === 0) {
      // 指定コーパスが見つからない&&自社のAPIではない場合、400エラーを返す
      $formatter = new ApiResponseFormatter(404, 'Corpus not found.', array());
      return response()->json($formatter->getResponseArray());
    }

    return;
  }
}
