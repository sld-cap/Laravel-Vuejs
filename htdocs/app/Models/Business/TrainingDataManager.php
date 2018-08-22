<?php

namespace App\Models\Business;

use Validator;
use JWTAuth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

use App\Models\Company;
use App\Models\Api;
use App\Models\ApiCorpus;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;

use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Enums\ClassifierLanguage;
use App\Enums\TrainingDataStatus;

/**
 * AI学習のための教師データの取り扱いを実装するモデル
 */
class TrainingDataManager
{
  const SAVE_FILE_PATH = '/files/corpus-admin/training-datas/';
  protected $corpus_id;   // コーパスID
  protected $file_name;   // ファイル名
  protected $file_path;   // ファイルパス
  protected $file;        // SplFileObjectオブジェクト
  protected $record_cnt;  // レコード件数
  protected $message;     // メッセージ
  protected $err_code;    // エラーコード
  protected $datas;       // レスポンス用整形データ
  protected $err_exists = false;  // エラー有無フラグ

  /**
   * コンストラクタ
   */
  public function __construct($_corpus_id)
  {
    $this->corpus_id = $_corpus_id;
  }

  /**
   * セッター：エラーのセット
   */
  private function setError($_code, $_message, $_errors = null)
  {
    $this->err_exists = true;
    $this->err_code = $_code;
    $this->datas = $_errors ? $_errors : "";
    $this->message = $_message;
  }

  /**
   * ゲッター：エラーの有無を取得する
   * 
   * @return Boolean
   */
  public function isErrorExists()
  {
    return $this->err_exists;
  }

  /**
   * ゲッター：教師データのCSVファイルの保存パスを返す
   */
  public function getTrainingDataPath()
  {
    return $this->file_path;
  }

  /**
   * ゲッター：教師データの件数を返す
   */
  public function getRecordCount()
  {
    return $this->record_cnt;
  }

  /**
   * ゲッター：ステータスコードを返す
   */
  public function getCode()
  {
    return $this->err_code;
  }

  /**
   * ゲッター：教師データ登録時のエラーメッセージを返す
   */
  public function getMessage()
  {
    return $this->message;
  }

  /**
   * ゲッター：レスポンス用整形データを返す
   */
  public function getData()
  {
    return $this->datas;
  }

  /**
   * ゲッター：FILEオブジェクトを返す
   */
  public function getObject()
  {
    return $this->file;
  }

  /**
   * セッター：対象のクリエイティブに学習完了日をセットする
   */
  public function setTrainingDoneDate() 
  {
    // 登録処理
    DB::beginTransaction();

    try {
      $class_id_list = CorpusClass::where('corpus_id', $this->corpus_id)->get(['id']);
      $training_datas = CorpusCreative::whereIn('corpus_class_id', $class_id_list)
        ->where('data_type', CorpusDataType::Training)
        ->get();

      $now = Carbon::now();
      foreach($training_datas as $data) {
        $creative = CorpusCreative::find($data->id);
        $creative->training_done_data = $now;
        $creative->save();
        unset($creative);
      }
  
      DB::commit();

    } catch (\PDOException $e){
      DB::rollBack();
      $this->setError(400, $e->getMessage(), array(
        'message' => 'Exception from TrainingDataManager.php@setTrainingDoneDate'
      ));
    }

    return;
  }

  /**
   * ゲッター：教師データ一覧を配列で返す
   *
   * @return Array  教師データ
   */
  public function loadTrainingDataAll()
  {
    try {
      $corpus = Corpus::findOrFail($this->corpus_id);
      $classes = CorpusClass::where('corpus_id', $corpus->id)
          ->orderByRaw('CAST(training_data_count AS int) DESC')->get();

      if ($classes->count() == 0) {
        $this->setError(404, 'Training data not found.', array(
          'message' => '教師データが登録されていません->corpus_id:' . $this->corpus_id
        ));
        return;
      }

      $class_roop_cnt = 0;     // クラス件数カウンタ
      $response_array = null;  // レスポンス配列
      foreach($classes as $class) {
        $creatives = CorpusCreative::where('corpus_class_id', $class->id)
            ->orderBy('content', 'asc')
            ->orderBy('updated_at', 'desc')
            ->get();

        $response_array[$class_roop_cnt]['class_id'] = $class->id;
        $response_array[$class_roop_cnt]['name'] = $class->name;
        $response_array[$class_roop_cnt]['corpus_id'] = $class->corpus_id;
        $response_array[$class_roop_cnt]['threshold'] = $class->threshold;
        $response_array[$class_roop_cnt]['training_data_count'] = $class->training_data_count;
        $response_array[$class_roop_cnt]['test_data_count'] = $class->test_data_count;
        $response_array[$class_roop_cnt]['created_at'] = Carbon::createFromFormat('Y-m-d H:i:s', $class->created_at)->format('Y-m-d H:i:s');
        $response_array[$class_roop_cnt]['updated_at'] = Carbon::createFromFormat('Y-m-d H:i:s', $class->updated_at)->format('Y-m-d H:i:s');
    
        // $creative_roop_cnt = 0; // クリエイティブ個数カウンタ
        foreach($creatives as $creative) {
          $data_type = (int)$creative->data_type;
          if($data_type == CorpusDataType::Training) {
            $response_array[$class_roop_cnt]['training_data'][] = array(
              'creative_id' => $creative->id,
              'content' => $creative->content
            );
          } else if($data_type == CorpusDataType::Test) {
            $response_array[$class_roop_cnt]['test_data'][] = array(
              'creative_id' => $creative->id,
              'content' => $creative->content
            );
          }
        }
        $class_roop_cnt++;
      }
      
      return $response_array;

    } catch (\Exception $e) {
      $this->setError(400, $e->getMessage(), array(
        'message' => 'Exception from TrainingDataManager.php@LoadTrainingDataAll'
      ));
      return;
    }
  }

  /**
   * セッター：CSVファイル読み込み
   */
  public function loadAndSetCsvObject($path) 
  {
    $file = new \SplFileObject($path);

    $file->setFlags(
      \SplFileObject::READ_CSV |     // CSV 列として行を読み込む
      \SplFileObject::READ_AHEAD |   // 先読み/巻き戻しで読み出す。
      \SplFileObject::SKIP_EMPTY |   // 空行は読み飛ばす
      \SplFileObject::DROP_NEW_LINE  // 行末の改行を読み飛ばす
    );

    $this->file = $file;
  }

  /**
   * データ作成：クリエイティブの登録・更新を行う
   */
  public function updateTrainData($_request, $_creative_id = null)
  {
    // バリデーション
    $validate_result = $this->trainDataValidation($_request, $_creative_id);
    if ($this->isErrorExists()) {
      return;
    }
    
    // クリエイティブのDB登録処理
    $save_creative_result = $this->saveCreative($_request, $_creative_id);
    if ($this->isErrorExists()) {
      return;
    }

    // 正常にDB登録が完了した場合、200レスポンスを返す
    $form = $_request->all();
    $this->data = array(
      'message' => CorpusDataType::getDescription($form['data_type']) . 'の登録が完了しました。',
      'corpus_id' => $form['corpus_id'],
      'corpus_class_id' => $form['corpus_class_id'],
      'add_class_name' => $form['corpus_class_id'] ? $form['corpus_class_id'] : $form['add_class_name'],
      'content' => $form['content'],
      'data_type' => $form['data_type']
    );

    return true;
  }

  /**
   * データ作成：入力されたクリエイティブテキストをDBに保存する。
   */
  private function saveCreative($_request, $_creative_id = null)
  {
    DB::beginTransaction();
    try {
      // Tips:バリデーションは前段階で実施済みのため不要
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
          $this->setError(400, 'Duplicate class name', $data);
          return;

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

    } catch (\PDOException $e){
      DB::rollBack();
      $this->setError(400, $e->getMessage(), array(
        'message' => 'PDOException from TrainingDataManager.php@saveCreative'
      ));
      return;

    } catch(\Exception $e) {
      DB::rollBack();
      $this->setError(404, $e->getMessage(), array(
        'message' => 'Exception from TrainingDataManager.php@saveCreative'
      ));
      return;
    }
  }

  /**
   * データ作成：クリエイティブ一括登録用
   */
  public function createCreativeInsertData($_with_data) 
  {
    $created_class_list = [];
    $insert_creative_data = [];
    $now = Carbon::now();
    $corpus_id = $_with_data['corpus_id'];
    $current_data_type = $_with_data['data_type'];

    // 既存のクラス
    $current_class_name_list = [];    
    if ($current_data_type == CorpusDataType::Test) {
      $classes = CorpusClass::where('corpus_id', $this->corpus_id)->get();
      foreach ($classes as $class) {
        $current_class_name_list[$class->name] = $class->id;
      }
    }
    
    $this->file->rewind();
    $key = 0;
    foreach ($this->file as $line) {
      // 最初の行をスキップ
      if ($this->file->key() == 0) {
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
        $this->setError(400, 'validation error.', $errors);
        return;
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
        $this->setError(400, 'validation error.', $errors);
        return;
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
          $this->setError(400, 'Invalid class name', array(
            'message' => '学習データに登録されていないクラス名が入力されています.'
          ));
          return;
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

  /**
   * CSVデータ作成：DBから教師データ情報を抽出し、所定フォルダにCSV保存する
   */
  public function saveTrainingDataToCsv()
  {
    try {
      // 対象コーパスのクリエイティブ取得
      $training_data = CorpusCreative::select()
        ->join('corpus_classes','corpus_classes.id','=','corpus_creatives.corpus_class_id')
        ->whereIn('corpus_classes.corpus_id', [$this->corpus_id])
        ->where('corpus_creatives.data_type', CorpusDataType::Training)
        ->get();

      // ファイル名
      $timestamp = Carbon::now()->timestamp;
      $this->file_name = "training_data_" . $timestamp . ".csv";

      // ファイルパス
      $this->file_path = public_path() . self::SAVE_FILE_PATH . $this->file_name;

      // CSV形式で保存
      if(is_writable(dirname($this->file_path)) && touch($this->file_path)) {
        // 書き込み
        $file = new \SplFileObject($this->file_path, "w");
        foreach($training_data as $data) {
          $csv = [$data->content, $data->name];
          $file->fputcsv($csv);
        }
        $file = null;
      } else {
        $this->setError(400, 'This file is not writable or can not touch.', array(
          'message' => '学習実行用のテキストデータ取得に失敗しました'
        ));
        return;
      }

      // レコード件数保存
      $this->record_cnt = count($training_data);

    } catch (\Exception $e) {
      $this->setError(400, $e->getMessage());
      return;
    }

    return;
  }

  /**
   * データ削除：既存のクリエイティブデータを削除する
   * 
   * @param int $_data_type
   */
  public function deleteOldCreative($_data_type)
  {
    $del_classes = CorpusClass::where('corpus_id', $this->corpus_id);
    $del_class_id_list = [];
    foreach ($del_classes->get() as $class) {
      $del_class_id_list[] = $class->id; // 削除対象のクラス
    }

    DB::beginTransaction();
    try {
      if ($_data_type == CorpusDataType::Training) {
        // 学習用データの場合はクラスごと削除
        $del_creatives = CorpusCreative::whereIn('corpus_class_id', $del_class_id_list);
        $del_creatives->delete();
        $del_classes->delete();
      } elseif ($_data_type == CorpusDataType::Test) {
        // テスト用データの場合はクリエイティブのみ削除
        $del_creatives = CorpusCreative::whereIn('corpus_class_id', $del_class_id_list)->where('data_type', $data_type);
        $del_creatives->delete();
      } else {
        $this->setError(400, 'Data-type not selected.', array(
          'message' => 'データタイプが指定されていません'
        ));
      }

      DB::commit();

    } catch (\PDOException $e){
      DB::rollBack();
      $this->setError(400, $e->getMessage(), array(
        'message' => 'PDOException from TrainingDataManager.php@deleteOldCreative'
      ));
    } catch (\Exception $e){
      DB::rollBack();
      $this->setError(400, $e->getMessage(), array(
        'message' => 'Exception from TrainingDataManager.php@deleteOldCreative'
      ));
    }
  }


  /**
   * ファイル削除：所定フォルダ内にあるCSVを一括削除する
   */
  public function deleteAllCsv()
  {
    return Storage::files(public_path() . '/files');
  }

  /**
   * エラーチェック：コーパス利用可否チェック
   */
  public function checkValid()
  {
    $user = JWTAuth::parseToken()->authenticate();
    $corpus = Corpus::where('id', $this->corpus_id)->where('company_id', $user->company_id)->get();
    if ($corpus->count() == 0) {
      $this->setError(404, 'Corpus not found. -> corpus_id:' . $this->corpus_id, array(
        'message' => 'ご指定のコーパスは登録されておりません'
      ));
    }
  }

  /**
   * エラーチェック：教師データCSVファイルが正常にアップされたかどうかを返す
   */
  public function checkUploadFile(Request $_request) 
  {
    $err = false;
    $pass_extension = ['txt', 'csv']; // 適切な拡張子セット
    if (!$_request->hasFile('csv_file')) {
      $this->setError(400, 'Training-data not found.', array(
        'message' => 'CSVファイルがアップロードされていません'
      ));
      return;
    } elseif (!in_array($_request->csv_file->extension(), $pass_extension)) {
      $this->setError(400, 'Training data is invalid extension.', array(
        'message' => 'ファイル形式が不正です。CSVファイルをアップロードしてください。'
      ));
      return;
    } else {
      $csv_tmp_file = $_request->file('csv_file');
      if (!$csv_tmp_file->isValid()) {
        $this->setError(400, 'Training data is invalid data.', array(
          'message' => '不正なCSVファイル。ファイル内容を確認の上、再度アップロードしてください。'
        ));
        return;
      }
    }
  }

  /**
   * エラーチェック：教師データの登録・更新バリデーション
   */
  private function trainDataValidation(Request $_request, $_creative_id = null)
  {
    $form = $_request->all();
    unset($form['_token']);

    if ($_creative_id) {
      // クリエイティブ編集のバリデーション
      $validator = Validator::make($form, CorpusCreative::$edit_rule, CorpusCreative::$edit_error_messages);
    } else {
      // クリエイティブ新規作成のバリデーション
      $validator = Validator::make($form, CorpusCreative::$create_rule, CorpusCreative::$create_error_messages);
      $validator->sometimes('add_class_name', 'required|between:0,40', function($input) {
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
      $this->setError(400, 'validation error.', $errors);
      return;
    }

    // 指定されたコーパスの不正チェック
    $user = JWTAuth::parseToken()->authenticate();
    $my_corpus = Corpus::where('id', $form['corpus_id'])
        ->where('company_id', $user->company_id)
        ->count();

    if ($my_corpus == 0) {
      $this->setError(400, 'Invalid corpus error.', array(
        'message' => '指定されたコーパスは利用できません->corpus_id:' . $form['corpus_id']
      ));
      return;
    }

    return;
  }

  /**
   * エラーチェック：CSV行数チェック
   */
  private function checkCsvRowCount($_data_type)
  {
    if ($_data_type == CorpusDataType::Training) {
      // 行数チェック
      $row_count = 0;
      $min_row_count = 5;
      $max_row_count = 15000;

      $this->file->rewind();
      foreach ($this->file as $line) {
        // 最初の行をスキップ
        if($this->file->key() == 0) {
          continue;
        }
        $row_count++;
      }

      if ($row_count < $min_row_count || $max_row_count < $row_count) {
        $this->setError(400, 'Training data row count is invalid.', array(
          'message' => '教師データは、5 〜 15,000件で登録する必要があります'
        ));
      }
    }
  }

  /**
   * エラーチェック：CSVアップロード全体
   */
  public function validateUpload(Request $_request)
  {
    // 指定コーパスの利用可否チェック
    $this->checkValid();
    if ($this->err_exists) return;

    // アップロードファイルの媒体正常性チェック
    $this->checkUploadFile($_request);
    if ($this->err_exists) return;

    // CSVファイル読み込み
    $file_path = $_request->file('csv_file')->path();
    $this->loadAndSetCsvObject($file_path);

    // CSVデータ件数チェック(学習データの場合のみ)
    $data_type = $_request->data_type;
    if ($data_type == null) {
      $this->setError(400, 'Data-type missing.', array(
        'message' => 'データタイプが指定されていません'
      ));
    }
    $this->checkCsvRowCount($_request->data_type);
    if ($this->err_exists) return;
  }

}