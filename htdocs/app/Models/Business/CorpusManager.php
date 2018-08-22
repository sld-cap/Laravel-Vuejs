<?php

namespace App\Models\Business;

use Carbon\Carbon;
use JWTAuth;
use Illuminate\Support\Facades\DB;
// use Illuminate\Http\Request;

use App\Models\Company;
use App\Models\User;
// use App\Models\Api;
// use App\Models\ApiCorpus;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;
use App\Models\Business\TrainingDataManager;

use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Enums\TrainingDataStatus;

/**
 * コーパスの取り扱いを実装するモデル
 */
class CorpusManager
{
  protected $id;                  // コーパスID
  protected $corpus_obj;          // コーパスモデルオブジェクト
  protected $status;              // 学習ステータス
  protected $message;             // 状態メッセージ 
  protected $err_exists = false;  // エラー有無
  protected $isProduction;        // 本番コーパスチェック
  
  /**
   * コンストラクタ
   */
  public function __construct($_corpus_id)
  {
    $this->id = $_corpus_id;
    $this->setObject();
    $this->setStatus();
    $this->setProductionStatus();
  }

  /**
   * コーパスのモデルオブジェクトを生成する
   */
  private function setObject()
  {
    try {
      if ($this->isOurs()) {
        $this->corpus_obj = Corpus::findOrFail($this->id);
        $this->message = "コーパスオブジェクトをセットしました";

      } else {
        $this->err_exists = true;

      }
    } catch (\Exception $e) {
      $this->setError("指定されたコーパスは利用できません");
 
    }
  }

  /**
   * コーパスオブジェクトを返す
   * 
   * @return Array
   */
  public function getObject()
  {
    return $this->corpus_obj->toArray();
  }

  /**
   * コーパスの学習状況をセットする
   */
  private function setStatus()
  {
    $this->status = $this->err_exists ? CorpusStateType::Unavailable : $this->corpus_obj->status;
  }

  /**
   * コーパスの本番化状態をセットする
   */
  private function setProductionStatus()
  {
    $this->isProduction = $this->err_exists ? 999 : $this->corpus_obj->is_production;
  }

  /**
   * コーパスの学習状況を返す
   * 
   * @return String
   */
  public function getStatus()
  {
    return $this->status;
  }

  /**
   * コーパスのエラーメッセージを返す
   * 
   * @return String
   */
  public function getMessage()
  {
    return $this->message;
  }

  /**
   * コーパスのエラー有無を返す
   * 
   * @return Boolean
   */
  public function errorExists()
  {
    return $this->err_exists;
  }

  /**
   * コーパス作成者とログインユーザの所属会社を比較する
   * 
   * @return Boolean
   */
  // private function isOurs()
  public function isOurs()
  {
    try {
      $user = JWTAuth::parseToken()->authenticate();

      $user_company = $user->company_id;
      $corpus_company = Corpus::findOrFail($this->id)->company_id;

      if ($user_company == $corpus_company) {
        $this->message = "このコーパスの所有権チェックをクリアしました";
        return true;

      } else {
        $this->setError("指定コーパスの所有権が存在しません");
        return false;
  
      }
    } catch (\Exception $e) {
      $this->setError("コーパス所有権チェックに失敗しました");
      return false;

    }
  }

  /**
   * コーパスが学習可能ステータスかどうかを返す
   * 
   * @return Boolean
   */
  public function isLearnable()
  {
    if (!$this->err_exists && $this->status == CorpusStateType::Untrained) {
      $this->message = '学習の実行が可能です';
      return true;
    }

    $this->setError('現在、学習の実行ができません');
    return false;
  }

  /**
   * コーパスの学習を実行する
   * 
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function execLearn()
  {
    if ($this->isLearnable()) {
      DB::beginTransaction();
      // try {
        // 学習データをCSVに保存する
        $training_data = new TrainingDataManager($this->id);
        $training_data->saveTrainingDataCsv();

        $err_msg = $training_data->getErrorMessage();
        if($err_msg) {
          $this->setError($err_msg);
          return false;
        }

        // NLCの学習APIを実行する

      // }

    }

  }

  /**
   * エラーをセットする
   */
  private function setError($_err_message)
  {
    $this->err_exists = true;
    $this->message = $_err_message;
  }

}