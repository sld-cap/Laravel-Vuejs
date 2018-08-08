<?php

namespace App\Models\Business;

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

use Illuminate\Support\Facades\DB;      // DBのトランザクション利用
use Carbon\Carbon;

/**
 * AI学習のための教師データの取り扱いを実装するモデル
 */
class TrainingDataManager
{
  const SAVE_FILE_PATH = '/../../../public/files/corpus-admin/training-datas/';
  protected $corpus_id;   // コーパスID
  protected $file_name;   // ファイル名
  protected $file_path;
  protected $record_cnt;  // レコード件数
  protected $err_msg;     // エラーメッセージ
  
  /**
   * コンストラクタ
   */
  public function __construct($corpus_id)
  {
    $this->corpus_id = $corpus_id;
  }

  /**
   * DBから教師データ情報を抽出し、所定フォルダにCSV保存する
   */
  public function saveTrainingDataCsv()
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
      $this->file_path = dirname(__FILE__) . self::SAVE_FILE_PATH . $this->file_name;


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
        throw new \Exception('学習実行用のテキストデータ取得に失敗しました');
      }

      // レコード件数保存
      $this->record_cnt = count($training_data);


    } catch (\Exception $e) {
      $this->err_msg = $e->getMessage();
      return;
    }

    $this->err_msg = "";
    return;

  }

  /**
   * 教師データのCSVファイルの保存パスを返す
   */
  public function getTrainingDataPath()
  {
    return $this->file_path;
  }

  /**
   * 教師データの件数を返す
   */
  public function getRecordCount()
  {
    return $this->record_cnt;
  }

  /**
   * 教師データ登録時のエラーメッセージを返す
   */
  public function getErrorMessage()
  {
    return $this->err_msg;
  }

  /**
   * 対象のクリエイティブに学習完了日をセットする
   */
  public function setTrainingDoneDate() 
  {
    // 登録処理
    DB::beginTransaction();

    try {
      $class_id_list = CorpusClass::where('corpus_id', $this->corpus_id)->get(['id']);
      $training_data = CorpusCreative::whereIn('corpus_class_id', $class_id_list)
        ->where('data_type', CorpusDataType::Training)
        ->get();

      $now = Carbon::now();
      foreach($training_data as $data) {
        $creative = CorpusCreative::find($data->id);
        $creative->training_done_data = $now;
        $creative->save();
        unset($creative);
      }
  
      DB::commit();

    } catch (\PDOException $e){
      DB::rollBack();
      $this->err_msg = $e->getMessage();       
    }

    $this->err_msg = "";
    return;
    
  }

  /**
   * 指定コーパスの教師データ一覧を配列で返す
   *
   * @param  int  $_corpus_id
   * @return Array  教師データ
   */
  public function loadTrainingDataAll()
  {
    $corpus = Corpus::find($this->corpus_id);

    if (!$corpus) {
      return false;
    }

    $classes = CorpusClass::where('corpus_id', $corpus->id)
        ->orderByRaw('CAST(training_data_count AS int) DESC')
        ->get();
        
    $response_array['code'] = 200;
    $response_array['message'] = 'Find sucessfull.';

    $class_roop_cnt = 0; // クラス個数カウンタ
    foreach($classes as $class) {
      $creatives = CorpusCreative::where('corpus_class_id', $class->id)
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
        if($data_type === CorpusDataType::Training) {
          $response_array[$class_roop_cnt]['training_data'][] = array(
            'creative_id' => $creative->id,
            'content' => $creative->content
          );

        } else if($data_type === CorpusDataType::Test) {
          $response_array[$class_roop_cnt]['test_data'][] = array(
            'creative_id' => $creative->id,
            'content' => $creative->content
          );
        }
      }
      $class_roop_cnt++;
    }
    
    return $response_array; 
  }

}