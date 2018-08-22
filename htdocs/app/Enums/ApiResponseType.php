<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ApiResponseType extends Enum
{
  const Ok = 200;
  const BadRequest = 400;
  const Unauthorized = 401;
  const NotFound = 404;
  const TooManyRequests = 429;

  /**
   * Enum値に対応するメッセージを返す
   *
   * @param $value
   * @return string
   */
  public static function getDescription($value): string
  {
    switch ($value){
      case self::Ok:
        return '正常応答';
        brake;
      case self::BadRequest:
        return '不正なリクエスト';
        brake;
      case self::Unauthorized:
        return '認証されていない';
        brake;
      case self::NotFound:
        return '存在しないリソース';
        brake;
      case self::TooManyRequests:
        return 'API Call数制限オーバー';
        brake;
      default:
        return self::getKey($value);
    }
  }

}