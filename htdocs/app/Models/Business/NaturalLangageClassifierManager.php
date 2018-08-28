<?php

namespace App\Models\Business;

use JWTAuth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

use App\Models\Company;
use App\Models\Api;
use App\Models\Corpus;

use App\Enums\ClassifierLanguage;

/**
 * AI学習のための教師データの取り扱いを実装するモデル
 */
class NaturalLangageClassifierManager extends BaseManager
{
  private $nlc_url;        // コーパスID
  private $username;       // ファイル名
  private $password;       // ファイルパス
  private $clsssifier_id;  // API利用可能なclassifier_id
  private $tmp_clsssifier_id;  // 本番反映前のclassifier_id
  private $status;         // NLCの学習ステータス
  private $language;       // 利用言語
  private $classifier_name;    // nlc名
  
  /**
   * コンストラクタ
   */
  public function __construct($_corpus_id)
  {
    $corpus = Corpus::findOrFail($_corpus_id);
    $company = Company::findOrFail($corpus->company_id);
    $this->nlc_url = $company->nlc_url;
    $this->username = $company->nlc_username;
    $this->password = $company->nlc_password;
    $this->clsssifier_id = $corpus->apis->first()->nlc_id;
    $this->tmp_clsssifier_id = $corpus->tmp_nlc_id;
    $this->language = ClassifierLanguage::getDescription($corpus->language);
    $this->classifier_name = $corpus->name;
    if ($this->classifier_id) {
      $this->setStatus();
    }
  }

  /**
   * + ゲッター：NLCのclsssifier_idを取得する
   */
  public function getId()
  {
    return $this->clsssifier_id;
  }

  /**
   * + ゲッター：NLCのtmp_clsssifier_idを取得する
   */
  public function getTmpId()
  {
    return $this->tmp_clsssifier_id;
  }
  
  /**
   * + ゲッター：NLCのURLを取得する
   */
  public function getUrl()
  {
    return $this->unlc_urlrl;
  }

  /**
   * + セッター：NLC のステータス取得APIを実行しセット
   */
  public function setStatus()
  {
    if ($this->username && $this->password && $this->nlc_url && $this->classifier_id) {
      try {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $this->nlc_url . $this->classifier_id);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        curl_setopt($curl, CURLOPT_USERPWD, $this->username . ":" . $this->password);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 証明書の検証を行わない
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 証明書の検証を行わない
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  // curl_execの結果を文字列で返す

        $result = curl_exec($curl);
        $result_json = json_decode($result, true);
        curl_close($curl);

        // status をセット
        $this->status = $result_json["status"];
        return true;

      } catch (\Exception $e) {
        $this->setError(400, $e->getMessage(), [array(
          'field_id' => 'err_message',
          'debog' => 'Exception from NaturalLanguageClassifierManager@setStatus',
          'message' => 'APIの実行に失敗しました。時間を置いて再度お試しください。(ERR001503)'
        )]);
        $this->status = '';
      }
    }
  }

  /**
   * + ゲッター：NLC の現在のステータスを返す
   */
  public function getStatus() {
    return $this->status;
  }

  /**
   * + 外部API実行：NLC学習APIの実行（NLCの生成）
   */
  public function createNlc($_csv_path)
  {
    try {
      // curl生成
      $cfile = new \CURLFile($_csv_path);
      $data = array(
        "training_data" => $cfile,
        "training_metadata" => "{\"language\":\"" . ClassifierLanguage::getDescription($target_corpus->language) . "\",\"name\":\"" . $target_corpus->name . "\"}"
      );

      // 古いNLCの削除
      $delete_result = $this->deleteNlc();
      if (!$delete_result) {
        return false;
      }
      
      // 新しいNLCの作成curl実行
      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $this->nlc_url);
      curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
      curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
      curl_setopt($curl, CURLOPT_USERPWD, $this->username . ":" . $this->password);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 証明書の検証を行わない
      curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 証明書の検証を行わない
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  // curl_execの結果を文字列で返す
      curl_setopt($curl, CURLOPT_POST, true);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
      $result = curl_exec($curl);
      $result_json = json_decode($result, true);
      curl_close($curl);

      // NLC作成API失敗時のエラー処理
      if( array_key_exists('code', $result_json) && ($result_json['code'] != 200) ) {
        $this->setError(400, 'NLC create API failed.', [array(
          'field_id' => 'err_message',
          'message' => 'APIの実行に失敗しました。時間を置いて再度お試しください。(ERR001504)'
        )]);
        $this->status = '';
        return false;
      }

      // NLCプロパティのセット
      $this->status = $result_json['status'];
      $this->classifier_id = $result_json['classifier_id'];
      return true;

      // // 3分ごとにnlcのapiで学習ステータスを確認する
      // $break_status = 'Available';
      // $sleep_time = 60 * 3;

      // while($this->getStatus() !== $break_status) {
      //     sleep($sleep_time);
      //     $this->setStatus($this->classifier_id);
      // }
        
    } catch (\Exception $e) {
      $this->setError(400, $e->getMessage(), [array(
        'field_id' => 'err_message',
        'message' => 'APIの実行に失敗しました。時間を置いて再度お試しください。(ERR001505)'
      )]);
      $this->status = '';
      return false;
    }
  }

  /**
   * + 外部API実行：NLC の削除
   * 
   * @return Boolean
   */
  public function deleteNlc() 
  {
    if ($this->username && $this->password && $this->nlc_url && $this->classifier_id) {
      // curl の実行
      try {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $this->nlc_url . $this->classifier_id);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'DELETE');
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        curl_setopt($curl, CURLOPT_USERPWD, $this->username . ":" . $this->password);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 証明書の検証を行わない
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 証明書の検証を行わない
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);  // curl_execの結果を文字列で返す

        $result = curl_exec($curl);
        $result_json = json_decode($result, true);
        curl_close($curl);

        // NCL削除失敗時のエラー処理
        if( array_key_exists('code', $result_json) && ($result_json['code'] != 200) ) {
          $this->setError(400, 'NLC delete API done is failed.', [array(
            'field_id' => 'err_message',
            'message' => 'APIの実行に失敗しました。時間を置いて再度お試しください。(ERR001501)'
          )]);
          $this->status = 'Error: NLC delete API failed.';
          return false;
        }
        $this->classifier_id = null;
        $this->status = null;
        return true;
      
      } catch (\Exception $e) {
        $this->setError(400, $e->getMessage(), [array(
          'field_id' => 'err_message',
          'debug' => 'Exception from NaturalLanguageClassifierManager@setStatus',
          'message' => 'APIの実行に失敗しました。時間を置いて再度お試しください。(ERR001502)'
        )]);
        $this->status = 'Error: NLC delete API failed.';
        return false;
      }
    } 
  }


  /**
   * NLC の現在のステータスが「Avairable」であれば true を返す
   */
  public function isAvairable()
  {
    if ($this->status == "Available") {
      return true;
    }
    return false;
  }

  /**
   * + ゲッター：オブジェクトの文字列を返す
   * 
   * @return String
   */
  public function __toString()
  {
    return json_encode(array(
      'url' => $this->nlc_url,
      'username' => $this->username,
      'password' => $this->password,
      'clsssifier_id' => $this->clsssifier_id,
      'tmp_clsssifier_id' => $this->tmp_clsssifier_id,
      'status' => $this->status,
    ));
  }
}