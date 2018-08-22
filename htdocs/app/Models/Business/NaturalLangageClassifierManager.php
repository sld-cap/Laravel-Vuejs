<?php

namespace App\Models\Business;

use Carbon\Carbon;

use App\Models\Company;
use App\Models\Api;
use App\Models\Corpus;

use App\Enums\ClassifierLanguage;

/**
 * AI学習のための教師データの取り扱いを実装するモデル
 */
class NaturalLangageClassifierManager
{
  protected $url;           // コーパスID
  protected $username;      // ファイル名
  protected $password;      // ファイルパス
  protected $clsssifier_id;      // API利用可能なclassifier_id
  protected $tmp_clsssifier_id;  // 本番反映前のclassifier_id
  protected $status;        // NLCの学習ステータス

  /**
   * コンストラクタ
   */
  public function __construct($_corpus_id)
  {
    $corpus = Corpus::findOrFail($_corpus_id);
    $company = Company::findOrFail($corpus->company_id);
    $this->url = $company->nlc_url;
    $this->username = $company->nlc_username;
    $this->password = $company->nlc_password;
    $this->clsssifier_id = $corpus->apis->first()->nlc_id;
    $this->tmp_clsssifier_id = $corpus->tmp_nlc_id;
  }

  /**
   * NLCのclsssifier_idを取得する
   */
  public function getId()
  {
    return $this->clsssifier_id;
  }

  /**
   * NLCのtmp_clsssifier_idを取得する
   */
  public function getTmpId()
  {
    return $this->tmp_clsssifier_id;
  }
  
  /**
   * NLCのURLを取得する
   */
  public function getUrl()
  {
    return $this->url;
  }

  /**
   * 教師データCSVの格納状況を確認する
   */

  /**
   * オブジェクトの文字列を返す
   * 
   * @return String
   */
  public function __toString()
  {
    return json_encode(array(
      'url' => $this->url,
      'username' => $this->username,
      'password' => $this->password,
      'clsssifier_id' => $this->clsssifier_id,
      'tmp_clsssifier_id' => $this->tmp_clsssifier_id
    ));
  }
}