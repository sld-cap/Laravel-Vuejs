<?php

namespace App\Models\Business;

use Carbon\Carbon;
use JWTAuth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Models\Company;
use App\Models\User;
use App\Models\Api;
use App\Models\ApiCorpus;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;
use App\Models\Business\ApiResponseFormatter;

use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Enums\TrainingDataStatus;

/**
 * コーパスの取り扱いを実装するモデル
 */
class CorpusManager
{
  protected $id;  // コーパスID
  protected $corpus_obj; // コーパスモデルオブジェクト
  protected $status; // 学習ステータス
  protected $message; // 状態メッセージ 
  protected $err_exists = false;
  
  /**
   * コンストラクタ
   */
  public function __construct($_corpus_id)
  {
    $this->id = $_corpus_id;
    $this->setObject();
    $this->setStatus();
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
        // $this->message = "指定されたコーパスはご利用できません";
        $this->err_exists = true;
      }

    } catch (\Exception $e) {
      $this->message = "指定されたコーパスはご利用できません";
      $this->err_exists = true;

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
   * コーパス作成者とログインユーザの所属会社を比較する
   * 
   * @return Boolean
   */
  // private function isOurs()
  public function isOurs()
  {
    // try {
      $user = JWTAuth::parseToken()->authenticate();
      return $user;

      $user_company = $user->company_id;
      $corpus_company = Corpus::findOrFail($this->id)->company_id;

      if ($user_company == $corpus_company) {
        $this->message = "このコーパスの所有権チェックをクリアしました";
        return true;

      } else {
        $this->message = "指定コーパスの所有権が存在しません";
        $this->err_exists = true;
        return false;
  
      }
    // } catch (\Exception $e) {
    //   $this->message = "コーパス所有権チェックに失敗しました";
    //   $this->err_exists = true;
    //   return false;

    // }
  }

  /**
   * コーパスが学習可能ステータスかどうかを返す
   * 
   * @return Boolean
   */
  public function isLearnable()
  {
    return $this->status == CorpusStateType::Untrained ? true : false;
  }

}