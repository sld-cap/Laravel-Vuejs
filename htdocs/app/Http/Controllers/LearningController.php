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
    // try {
      $corpus = new CorpusManager($_corpus_id);
      
      $formatter = null;
      if ($corpus->isLearnable()) {
        $message = 'This corps is learnable status.';
        $formatter = new ApiResponseFormatter(200, $message, array(
          'message' => $corpus->getMessage()
        ));

      } else {
        $message = 'This corpus is not learnale status. -> corpus_id:' . $_corpus_id;
        $formatter = new ApiResponseFormatter(400, $message, array(
          'message' => $corpus->getMessage()
        ));
      }

    // } catch (\Exception $e) {
    //   $message = 'This corpus is not learnale status. ' . $e->getMessage() ;
    //   $formatter = new ApiResponseFormatter(400, $message, array(
    //     'message' => 'ご指定のコーパスは学習できません'
    //   ));
    // }

    return response()->json($formatter->getResponseArray());
  }

  /**
   * 学習を実行しその結果を返す
   * 
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function learn($_corpus_id)
  {
    $data = new TrainingDataManager($_corpus_id);
    return $data->deleteAllCsv();
    // $learnable_response = $this->learnable($_corpus_id);
    // if ($learnable_response->getData()->code == ApiResponseType::Ok) {
    //   $nlc = new NaturalLangageClassifierManager($_corpus_id);
    //   return $nlc;
    // }

    return "pass.";
  }
}
