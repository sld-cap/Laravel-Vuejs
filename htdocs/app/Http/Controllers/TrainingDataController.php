<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\User;
use App\Enums\CorpusType;
use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;
use App\Models\Business\ApiResponseFormatter;
use App\Models\Business\TrainingDataManager;

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
    
    // 登録処理
    DB::beginTransaction();

    try {
      $form = $_request->all();
      $corpus_id = $form['corpus_id'];
      $add_class_name = $form['add_class_name'];
      $get_data_type = (int)$form['data_type'];
      $corpus_class_id = $form['corpus_class_id'];

      if ($corpus_class_id === null) {
        // 同じ名前のクラス名がないかどうか
        $count = CorpusClass::where('corpus_id', $corpus_id)
            ->where('name', 'like binary', $add_class_name)
            ->count();

        if ($count > 0) {
          $data = array(
            'corpus_id' => $corpus_id,
            'add_class_name' => $add_class_name,
            'message' => '既に同じクラス名が存在しています'
          );
          $formatter = new ApiResponseFormatter(400, 'Duplicate class name', $data);
          return response()->json($formatter->getResponseArray());
    
        } else {
          // クラス登録
          $class = new CorpusClass;
          $class->name = $add_class_name;
          $class->corpus_id = $corpus_id;
          $class->threshold = config('corpus.threshold_default');
          $class->training_data_count = 0;
          $class->test_data_count = 0;
          $class->save();
        }

        $corpus_class_id = $class->id;
      }

      // クリエイティブのDB登録
      $creative = new CorpusCreative;
      $creative->corpus_class_id = $corpus_class_id;
      $creative->data_type = $get_data_type;
      $creative->content = $form['content'];
      $creative->training_done_data = null;
      $creative->save();

      // クラスのデータ件数の更新
      $update_class = CorpusClass::find($corpus_class_id);

      if ($get_data_type === CorpusDataType::Training) { // 学習データ
        $count = $update_class->training_data_count;
        $count++;
        $update_class->training_data_count = $count;

        // コーパスのステータスを未学習に更新
        $corpus = Corpus::find($corpus_id);
        $corpus->status = CorpusStateType::Untrained;
        $corpus->save();

      } else if ($get_data_type === CorpusDataType::Test) { // テストデータ
        $count = $update_class->test_data_count;
        $count++;
        $update_class->test_data_count = $count;
      }

      $update_class->save();
      DB::commit();

    } catch (\PDOException $e){
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    } catch(\Exception $e) {
      DB::rollBack();
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    }

    // 正常にDB登録が完了した場合、200レスポンスを返す
    $data = array(
      'corpus_id' => $corpus_id,
      'corpus_class_id' => $corpus_class_id,
      'content' => $form['content'],
      'data_type' => $get_data_type,
      'message' => CorpusDataType::getDescription($get_data_type) . 'の登録が完了しました。'
    );

    $formatter = new ApiResponseFormatter(200, 'Training data insert successfull.', $data);
    return response()->json($formatter->getResponseArray());
  
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
