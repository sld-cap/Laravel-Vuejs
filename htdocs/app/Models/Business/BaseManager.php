<?php

namespace App\Models\Business;

/**
 * Managerクラスの基底クラス
 */
class BaseManager
{
  protected $message;     // メッセージ
  protected $err_code;    // エラーコード
  protected $datas;       // レスポンス用整形データ
  protected $err_exists = false;  // エラー有無フラグ

  /**
   * セッター：エラーのセット
   */
  protected function setError($_code, $_message, $_errors = null)
  {
    $this->err_exists = true;
    $this->err_code = $_code;
    if ($_errors) {
      $this->datas = is_array($_errors) ? $_errors : [$_errors];
    }
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
   * ゲッター：ステータスコードを返す
   */
  public function getCode(): int
  {
    return (int)$this->err_code;
  }

  /**
   * ゲッター：教師データ登録時のエラーメッセージを返す
   */
  public function getMessage(): string
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
}