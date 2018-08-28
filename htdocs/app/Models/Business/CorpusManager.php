<?php

namespace App\Models\Business;

use JWTAuth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

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
class CorpusManager extends BaseManager
{
  protected $id;                  // コーパスID
  protected $corpus_obj;          // コーパスモデルオブジェクト
  protected $status;              // 学習ステータス
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
        return false;
      }
    } catch (\Exception $e) {
      $this->setError(400, $e->getMessage(), [array(
        'message' => "指定されたコーパスは利用できません"
      )]);
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
        return true;
      } else {
        $this->setError(404, "Ownership of the specified corpus does not exist.", array(
          'message' => "指定コーパスの所有権が存在しません"
        ));
        return false;
      }
    } catch (\Exception $e) {
      $this->setError(400, $e->getMessage(), array(
        'debug' => 'Exeption from CorpusManager@isOurs'
      ));
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
      return true;
    }
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
      try {
        // 学習データをCSVに保存する
        $training_data = new TrainingDataManager($this->id);
        $training_data->saveTrainingDataCsv();
        if ($training_data->isErrorExists()) {
          $this->code = $training_data->getCode();
          $this->message = $training_data->getMessage();
          $this->data = $training_data->getData();
          return;
        }

        // 学習の実行
        $training_data_csv_path = $training_data->getTrainingDataPath();
        $nlc = new NaturalLangageClassifierManager($this->id);
        $nlc->createNlc($training_data_csv_path);
        if ($nlc->isErrorExists()) {
          $this->code = $nlc->getCode();
          $this->message = $nlc->getMessage();
          $this->data = $nlc->getData();
        }
        
      } catch (\Excetption $e) {
        $this->code = 400;
        $this->message = $e->getMessage();
        $this->data = [array('debug' => 'Exception from CorpusManager@execLearn')];
      }
    }
  }

}