<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\User;
use App\Enums\ApiResponseType;
use App\Enums\CorpusType;
use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;
use App\Models\Business\CorpusManager;
use App\Models\Business\TrainingDataManager;
use App\Models\Business\NaturalLangageClassifierManager;
use App\Models\Business\ApiResponseFormatter;

use Carbon\Carbon;
use JWTAuth;

/**
 * 教師データの学習管理コントローラー
 */
class LearningController extends Controller
{
  /**
   * 学習可否の状態を返す
   * 
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function learnable($_corpus_id)
  {
    try {
      $corpus = new CorpusManager($_corpus_id);      
      $formatter = null;
      $code = null;
      $message = null;
      $data = null;

      if ($corpus->isLearnable()) {
        $code = 200;
        $message = 'The specified corpus is learnable.';
        $data = [array('message' => '学習可能')];
      } else {
        $code = 400;
        $message = 'Learning can not be performed on the specified corpus.';
        $data = [array('message' => '学習不可')];
      }

    } catch (\Exception $e) {
      $code = 400;
      $message = $e->getMessage();
      $data = [array('debug' => 'Exception from LearningController@learnable')];
    }

    $formatter = new ApiResponseFormatter($code, $message, $data);
    return response()->json($formatter->getResponseArray());
  }

  /**
   * 学習を実行しその結果を返す
   * 
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function learn($_corpus_id)
  {
    // 学習が行える状況かどうかの確認
    $learnable_response = $this->learnable($_corpus_id);
    if ($learnable_response->getData()->code == ApiResponseType::Ok) {
      $corpus = new CorpusManager($_corpus_id);
      $corpus->execLearn();

      if ($corpus->isErrorExist()) {
        $formatter = new ApiResponseFormatter(400, $corpus->getMessage(), $corpus->getData());
      } else {
        // 正常に学習できた場合は古いCSVファイルを削除して完了コードを返す
        $data = new TrainingDataManager($_corpus_id);
        $data->deleteAllCsv();
        $formatter = new ApiResponseFormatter($data->getCode(), $data->getMessage(), $data->getData());
      }

      return response()->json($formatter->getResponseArray());

    } else {
      // 学習出来ない場合はエラーコードをそのまま返す
      return $learnable_response;
    }
  }
}
