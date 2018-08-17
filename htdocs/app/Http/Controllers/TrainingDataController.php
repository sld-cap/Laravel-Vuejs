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

/**
 * 教師データの管理コントローラー
 */
class TrainingDataController extends Controller
{
  /**
   * 教師データを追加・更新する
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function store(Request $_request)
  {
    return $this->updateTrainData($_request);
  }

  /**
   * 指定コーパスの教師データ一覧をJSONで返す
   *
   * @param  int  $_corpus_id
   * @return \App\Models\Business\ApiResponseFormatter
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
   * 教師データの内容を編集・更新する
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $_creative_id
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function update(Request $_request, $_creative_id)
  {
    try {
      $form = $_request->all();
      return $this->updateTrainData($_request, $form['creative_id']);

    } catch (\Exception $e) {
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    }
  }

  /**
   * 教師データの削除
   *
   * @param  int  $_creative_id
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function destroy($_creative_id)
  {
    // 削除処理開始
    DB::beginTransaction();

    try {
      // 削除
      $creative = CorpusCreative::findOrFail($_creative_id);
      $relate_class_id = $creative->corpus_class_id;
      $data_type = $creative->data_type;
      $creative->delete();

      // データ件数更新
      $class = CorpusClass::findOrFail($relate_class_id);
      if ($data_type == CorpusDataType::Training) {
        $count = $class->training_data_count;
        $count--;
        $class->training_data_count = $count;

        // 学習データが0件の時、コーパスステータスを未学習に更新
        if ($count == 0) {
          $corpus = Corpus::findOrFail($class->corpus_id);
          $corpus->status = CorpusStateType::NoTrainingData;
          $corpus->save();
        }

      } else if ($data_type == CorpusDataType::Test) {
        $count = $class->test_data_count;
        $count--;
        $class->test_data_count = $count;
      }
      $class->save();

      // 学習データが対象の時、学習データ件数が0件であれば
      // テストデータの関連クリエイティブを削除して、該当クラスを削除する
      if ($data_type == CorpusDataType::Training) {
        $data_count = $class->training_data_count;
        $class_id = $class->id;

        if($data_count == 0) {
          $relate_creatives = CorpusCreative::where('corpus_class_id', $class_id);
          $relate_creatives->delete();
          $class->delete();
        }
      }

      DB::commit();

      $formatter = new ApiResponseFormatter(200, 'Training data delete sucessfull.', array(
        'target_creative_id' => $_creative_id,
        'message' => '対象のクリエイティブを削除しました。'
      ));
      return response()->json($formatter->getResponseArray());

    } catch (\PDOException $e){
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    } catch(\Exception $e) {
      DB::rollBack();
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    }
  }

  /**
   * 教師データのCSVアップロード
   *
   * @param  \Illuminate\Http\Request  $_request
   * @param  int  $_corpus_id
   * @param  int  $_data_type
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function upload(Request $_request, $_corpus_id)
  {
    try {
      // バリデーション
      $user = JWTAuth::parseToken()->authenticate();
      $corpus = Corpus::where('id', $_corpus_id)->where('company_id', $user->company_id)->get();
      if ($corpus->count() == 0) {
        $message = 'Corpus not found. -> corpus_id:' . $_corpus_id;
        $formatter = new ApiResponseFormatter(404, $message, array(
          'message' => 'ご指定のコーパスは利用できません'
        ));
        return response()->json($formatter->getResponseArray());
      }
      
      // CSVファイルのアップロードチェック
      $file = new TrainingDataManager($_corpus_id);
      $upload_error = $file->checkUploadFile($_request);
      if ($upload_error) {
        return $upload_error;
      }

      // csvファイル読み込み
      $csv_tmp_file = $_request->file('csv_file');
      $csv_file_path = $csv_tmp_file->path();
      $file->loadCsvFile($csv_tmp_file);

      // 学習データの場合のみ、CSVデータ件数チェック(範囲: 5-15000件)
      $form = $_request->all();
      $data_type = $form['data_type'];
      if ($data_type == CorpusDataType::Training) {
        $rowCnt_error = $file->isInvalidCsvRow($file, $_corpus_id);
        if ($rowCnt_error) {
          $message = 'Invalid file contents.';
          $formatter = new ApiResponseFormatter(404, $message, array(
            'message' => '教師データは、5 〜 15,000件で登録する必要があります'
          ));
          return response()->json($formatter->getResponseArray());
        }
      }

      DB::beginTransaction();

      // 古いデータの削除
      $del_classes = CorpusClass::where('corpus_id', $_corpus_id)->get();

      $del_class_id_list = [];
      foreach ($del_classes as $class) {
        $del_class_id_list[] = $class->id;
      }

      // 学習 or テスト
      if ($data_type == CorpusDataType::Training) {
        // 全てのクリエイティブ対象
        $del_creatives = CorpusCreative::whereIn('corpus_class_id', $del_class_id_list);

      } else {
        // テストデータのみ対象
        $del_creatives = CorpusCreative::whereIn('corpus_class_id', $del_class_id_list)->where('data_type', $data_type);

      }
      $del_creatives->delete();

      if ($data_type == CorpusDataType::Training) {
        $del_classes->delete();
      }
      
      // 登録データの作成
      $with_data = [
        'corpus_id' => $_corpus_id,
        'data_type' => $data_type
      ];

      $insert_data = $this->createCreativeInsertData($file->getObject(), $with_data);

      // 登録処理
      foreach($insert_data as $data) {
        $creative = new CorpusCreative;
        $creative->insert($data);
      }

      // クラスの登録件数更新
      $added_classes = CorpusClass::where('corpus_id', $_corpus_id)->get();
      
      $class_id_list = [];
      foreach($added_classes as $class) {
        $added_creative_count = CorpusCreative::where('corpus_class_id', $class->id)->where('data_type', $data_type)->count();

        $class = CorpusClass::find($class->id);
        if($data_type == CorpusDataType::Training) {
          $class->training_data_count = $added_creative_count;
        } else {
          $class->test_data_count = $added_creative_count;
        }
        
        $class->save();
      }
      
      // コーパスのステータス更新
      if($data_type == CorpusDataType::Training) {
        $corpus = Corpus::find($_corpus_id);
        $corpus->status = CorpusStateType::Untrained;
        $corpus->save();
      }
      
      DB::commit();

      $formatter = new ApiResponseFormatter(200, 'CSV upload successfull.', array(
        'message' => CorpusDataType::getDescription($data_type) . 'のCSVアップロードに成功しました。'
      ));
      return response()->json($formatter->getResponseArray());

    } catch (\PDOException $e){
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    } catch(\Exception $e) {
      DB::rollBack();
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    }
  }

  /**
   * 教師データのCSVダウンロード
   * 
   * @param  int  $_corpus_id
   * @return \Illuminate\Http\Response
   */
  public function download($_corpus_id) 
  {
    // バリデーション
    $user = JWTAuth::parseToken()->authenticate();
    $corpus = Corpus::where('id', $_corpus_id)->where('company_id', $user->company_id)->get();
    if ($corpus->count() == 0) {
      $message = 'Corpus not found. -> corpus_id:' . $_corpus_id;
      $formatter = new ApiResponseFormatter(404, $message, array(
        'message' => 'ご指定のコーパスは利用できません'
      ));
      return response()->json($formatter->getResponseArray());
    }

    // ダウンロードヘッダー
    $headers = array(
      "Content-type" => "text/csv",
      "Content-Disposition" => "attachment; filename=training_data.csv",
      "Pragma" => "no-cache",
      "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
      "Expires" => "0"
    );
  
    $callback = function() use ($_corpus_id) {
      $handle = fopen('php://output', 'w');

      // ヘッダー（1行目）
      $columns = [
        'テキスト（この行は削除しないでください。）',
        'クラス',
      ];
      mb_convert_variables('SJIS-win', 'UTF-8', $columns);
      fputcsv($handle, $columns);


      // データ（2行目以降）
      $training_data = CorpusCreative::select()
        ->join('corpus_classes','corpus_classes.id','=','corpus_creatives.corpus_class_id')
        ->whereIn('corpus_classes.corpus_id', [$_corpus_id])
        ->where('corpus_creatives.data_type', CorpusDataType::Training)
        ->get();

      foreach ($training_data as $data) {
        $csv = [
          $data->content,
          $data->name
        ];
        mb_convert_variables('SJIS-win', 'UTF-8', $csv);
        fputcsv($handle, $csv);
      }

      fclose($handle);
    };
  
    return response()->stream($callback, 200, $headers);

  }

  /**
   * バリデーション：教師データの登録・更新
   */
  protected function trainDataValidation($_request, $_creative_id)
  {
    $form = $_request->all();
    unset($form['_token']);

    if ($_creative_id) {
      // クリエイティブ編集のバリデーション
      $validator = Validator::make($form, CorpusCreative::$edit_rule, CorpusCreative::$edit_error_messages);
      $validator->sometimes('add_class_name', 'required', function($input) {
        // クラスID未指定の場合は「クラス名」を必須項目としてチェックする
        return $input->corpus_class_id == null;
      });
  
    } else {
      // クリエイティブ新規作成のバリデーション
      $validator = Validator::make($form, CorpusCreative::$create_rule, CorpusCreative::$create_error_messages);
      $validator->sometimes('add_class_name', 'required', function($input) {
        // クラスID未指定の場合は「クラス名」を必須項目としてチェックする
        return $input->corpus_class_id == null;
      });

    }

    $validator->sometimes('corpus_id', 'required|numeric', function($input) {
      // コーパスIDは必須項目として追加でチェックする
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

    if ($my_corpus == 0) {
      // 指定コーパスが見つからない&&自社のAPIではない場合、400エラーを返す
      $formatter = new ApiResponseFormatter(404, 'Corpus not found.', array());
      return response()->json($formatter->getResponseArray());
    }

    return;
  }

  /**
   * クリエイティブの登録・更新を行う
   */
  protected function updateTrainData($_request, $_creative_id = null)
  {
    // バリデーション
    $validate_result = $this->trainDataValidation($_request, $_creative_id);

    if ($validate_result) {
      return $validate_result;
    }
    
    // クリエイティブのDB登録処理
    $save_creative_result = $this->saveCreative($_request, $_creative_id);

    if ($save_creative_result) {
      return $save_creative_result;
    }

    // 正常にDB登録が完了した場合、200レスポンスを返す
    $form = $_request->all();
    $data = array(
      'message' => CorpusDataType::getDescription($form['data_type']) . 'の登録が完了しました。',
      'corpus_id' => $form['corpus_id'],
      'corpus_class_id' => $form['corpus_class_id'],
      'add_class_name' => $form['corpus_class_id'] ? $form['corpus_class_id'] : $form['add_class_name'],
      'content' => $form['content'],
      'data_type' => $form['data_type']
    );

    $formatter = new ApiResponseFormatter(200, 'Training data insert successfull.', $data);
    return response()->json($formatter->getResponseArray());
  }

  /**
   * 入力されたクリエイティブテキストをDBに保存する。
   */
  protected function saveCreative($_request, $_creative_id = null)
  {
    DB::beginTransaction();

    try {
      $form = $_request->all();
      $corpus_id = $form['corpus_id'];
      $add_class_name = $form['add_class_name'];
      $get_data_type = (int)$form['data_type'];
      $corpus_class_id = $form['corpus_class_id'];

      if ($corpus_class_id == null) {
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

      // creative_id 指定 -> クリエイティブの更新
      // creative_id 未指定 -> クリエイティブの新規登録 
      if ($_creative_id) {
        $creative = CorpusCreative::find($_creative_id);
        $creative->corpus_class_id = $corpus_class_id;
        $creative->data_type = $get_data_type;
        $creative->content = $form['content'];
        $creative->training_done_data = null;
        $creative->save();

      } else {
        $creative = new CorpusCreative;
        $creative->corpus_class_id = $corpus_class_id;
        $creative->data_type = $get_data_type;
        $creative->content = $form['content'];
        $creative->training_done_data = null;
        $creative->save();

      }

      // クラスのデータ件数の更新
      $update_class = CorpusClass::find($corpus_class_id);

      if ($get_data_type == CorpusDataType::Training) { // 学習データ
        $count = $update_class->training_data_count;
        $count++;
        $update_class->training_data_count = $count;

        // コーパスのステータスを未学習に更新
        $corpus = Corpus::find($corpus_id);
        $corpus->status = CorpusStateType::Untrained;
        $corpus->save();

      } else if ($get_data_type == CorpusDataType::Test) { // テストデータ
        $count = $update_class->test_data_count;
        $count++;
        $update_class->test_data_count = $count;
      }

      $update_class->save();
      DB::commit();

      return;
    } catch (\PDOException $e){
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    } catch(\Exception $e) {
      DB::rollBack();
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), '');
      return response()->json($formatter->getResponseArray());

    }
  }

  /**
   * クリエイティブ一括登録用データ作成
   */
  private function createCreativeInsertData($file, $relate_data) 
  {
    $created_class_list = [];
    $insert_creative_data = [];

    $now = Carbon::now();
    $corpus_id = $relate_data['corpus_id'];
    $current_data_type = $relate_data['data_type'];

    // 既存のクラス
    $current_class_name_list = [];    
    if ($current_data_type == CorpusDataType::Test) {
      $classes = CorpusClass::where('corpus_id', $corpus_id)->get();

      foreach ($classes as $class) {
        $current_class_name_list[$class->name] = $class->id;
      }
    }
    
    $file->rewind();
    $key = 0;
    foreach ($file as $line) {
      // 最初の行をスキップ
      if ($file->key() == 0) {
        continue;
      }
      
      $content = mb_convert_encoding($line[0], "UTF-8", "ASCII,JIS,UTF-8,EUC-JP,SJIS");
      $class_name = mb_convert_encoding($line[1], "UTF-8", "ASCII,JIS,UTF-8,EUC-JP,SJIS");

      // クラス名のバリデーション
      $validator = Validator::make(array('class_name' => $class_name), CorpusClass::$csv_insert_rule, CorpusClass::$csv_insert_error_message);
      if ($validator->fails()) {
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
      
      // クリエイティブのバリデーション
      $validator = Validator::make(array('content' => $content), CorpusCreative::$csv_upload_rule, CorpusCreative::$csv_upload_error_message);
      if ($validator->fails()) {
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

      if ($current_data_type == CorpusDataType::Training) {
        // 未作成のクラス登録
        if (!array_key_exists($class_name, $created_class_list)) {
          // クラス登録
          $class = new CorpusClass;
          $class->name = $class_name;
          $class->corpus_id = $corpus_id;
          $class->threshold = config('corpus.threshold_default');
          $class->training_data_count = 0;  // あとで集計して更新する
          $class->test_data_count = 0;      // あとで集計して更新する
          $class->save();

          $created_class_list[$class_name] = $class->id;
        }
      } else {
        // 既存のクラス名が指定されているかどうか
        if (!array_key_exists($class_name, $current_class_name_list)) {
          $formatter = new ApiResponseFormatter(400, 'Invalid class name', array(
            'message' => '学習データに登録されていないクラス名が入力されています.'
          ));
          return response()->json($formatter->getResponseArray());
        }
      }
      
      $set_class_id = "";
      if ($current_data_type == CorpusDataType::Training) {
        $set_class_id = $created_class_list[$class_name];
      } else {
        $set_class_id = $current_class_name_list[$class_name];
      }


      $insert_creative_data[$key][]  = [
        'corpus_class_id' => $set_class_id,
        'data_type' => $current_data_type,
        'content' => $content,
        'training_done_data' => null,
        'created_at' => $now,
        'updated_at' => $now
      ];

      if (count($insert_creative_data[$key]) == 1000) {
        $key++;
      }
    }

    return $insert_creative_data;
  }
}
