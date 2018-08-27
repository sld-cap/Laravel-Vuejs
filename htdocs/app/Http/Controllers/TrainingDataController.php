<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\User;
use App\Enums\CorpusType;
use App\Enums\CorpusStateType;
use App\Enums\CorpusDataType;
use App\Models\Corpus;
use App\Models\CorpusClass;
use App\Models\CorpusCreative;
use App\Models\Business\ApiResponseFormatter;
use App\Models\Business\TrainingDataManager;

use Log;
use Carbon\Carbon;
// use JWTAuth;
// use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * 教師データの管理コントローラー
 */
class TrainingDataController extends Controller
{
  /**
   * 教師データを追加・更新する
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function store(Request $_request)
  {
    $form = $_request->all();
    $corpus_id = $form['corpus_id']; 
    $train_data = new TrainingDataManager($corpus_id);
    $update_result = $train_data->updateTrainData($_request);
    if ($train_data->isErrorExists()) {
      $formatter = new ApiResponseFormatter(
        $train_data->getCode(), $train_data->getMessage(), $train_data->getData()
      );
    } else {
      $formatter = new ApiResponseFormatter(
        200, 'Add training data successfull.', [array('message' => '教師データを追加しました')]
      );
    }

    return response()->json($formatter->getResponseArray());
  }

  /**
   * 指定コーパスの教師データ一覧をJSONで返す
   *
   * @param  int  $_corpus_id
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function show($_corpus_id)
  {
    $formatter = null;
    try {
      $train_data = new TrainingDataManager($_corpus_id);
      $contents = $train_data->loadTrainingDataAll();
      if ($train_data->isErrorExists()) {
        $formatter = new ApiResponseFormatter(
          $train_data->getCode(), $train_data->getMessage(), $train_data->getData()
        );
      } else {
        $formatter = new ApiResponseFormatter(200, 'Find Successful.', $contents);
      }
    } catch (ModelNotFoundException $e) {
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), [array(
        'message' => 'ModelNotFoundException from TrainingDataController@show'
      )]);
    }
    
    return response()->json($formatter->getResponseArray());
  }

  /**
   * 教師データの内容を編集・更新する
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $_creative_id
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function update(Request $_request, $_creative_id)
  {
    try {
      $form = $_request->all();
      $train_data = new TrainingDataManager($form['corpus_id']);
      $train_data->updateTrainData($_request, $form['creative_id']);

      if ($train_data->isErrorExists()) {
        $formatter = new ApiResponseFormatter(
          $train_data->getCode(), $train_data->getMessage(), $train_data->getData()
        );
      } else {
        $formatter = new ApiResponseFormatter(
          200, 'Training data update successfull.', [array('message' => '教師データを編集しました')]
        );
      }

    } catch (\Exception $e) {
      $formatter = new ApiResponseFormatter(400, $e->getMessage(), [array(
        'debug' => 'Exception from TrainingDataController@update'
      )]);
    }

    return response()->json($formatter->getResponseArray());
  }

  /**
   * 教師データの削除
   *
   * @param  int  $_creative_id
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function destroy($_creative_id)
  {
    // 削除処理開始
    $formatter = null;
    DB::beginTransaction();

    try {
      // 削除
      $creative = CorpusCreative::findOrFail($_creative_id);
      $relate_class_id = $creative->corpus_class_id;
      $data_type = $creative->data_type;
      $creative->delete();

      // データ件数更新
      $class = CorpusClass::findOrFail($relate_class_id);
      if ($data_type == CorpusDataType::Training) {
        $count = $class->training_data_count;
        $count--;
        $class->training_data_count = $count;

        // 学習データが0件の時、コーパスステータスを未学習に更新
        if ($count == 0) {
          $corpus = Corpus::findOrFail($class->corpus_id);
          $corpus->status = CorpusStateType::NoTrainingData;
          $corpus->save();
        }

      } else if ($data_type == CorpusDataType::Test) {
        $count = $class->test_data_count;
        $count--;
        $class->test_data_count = $count;
      }
      $class->save();

      // 学習データが対象の時、学習データ件数が0件であれば
      // テストデータの関連クリエイティブを削除して、該当クラスを削除する
      if ($data_type == CorpusDataType::Training) {
        $data_count = $class->training_data_count;
        $class_id = $class->id;

        if($data_count == 0) {
          $relate_creatives = CorpusCreative::where('corpus_class_id', $class_id);
          $relate_creatives->delete();
          $class->delete();
        }
      }

      DB::commit();

      $formatter = new ApiResponseFormatter(200, 'Training data delete sucessfull.', [array(
        'target_creative_id' => $_creative_id,
        'message' => '対象のクリエイティブを削除しました。'
      )]);

    } catch (\PDOException $e){
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), [array(
        'message' => 'PDOException from TrainingDataController@destroy'
      )]);
    } catch(\Exception $e) {
      DB::rollBack();
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), [array(
        'message' => 'Exception from TrainingDataController@destroy'
      )]);
    }

    return response()->json($formatter->getResponseArray());
  }

  /**
   * 教師データのCSVアップロード
   *
   * @param  \Illuminate\Http\Request  $_request
   * @param  int  $_corpus_id
   * @param  int  $_data_type
   * @return \App\Models\Business\ApiResponseFormatter
   */
  public function upload(Request $_request, $_corpus_id)
  {
    // try {
      // バリデーション
      $data = new TrainingDataManager($_corpus_id);
      $data_type = $_request->data_type;

      $data->validateUpload($_request);
      if ($data->isErrorExists()) {
        $formatter = new ApiResponseFormatter(
          $data->getCode(), $data->getMessage(), $data->getData()
        );
        return response()->json($formatter->getResponseArray());
      }

      // 古いデータの削除
      $data->deleteOldCreative($data_type);
      if ($data->isErrorExists()) {
        $formatter = new ApiResponseFormatter(
          $data->getCode(), $data->getMessage(), $data->getData()
        );
        return response()->json($formatter->getResponseArray());
      }

      // 登録データの作成
      $with_data = [
        'corpus_id' => $_corpus_id,
        'data_type' => $data_type
      ];

      $insert_data = $data->createCreativeInsertData($with_data);
      if ($data->isErrorExists()) {
        $formatter = new ApiResponseFormatter(
          $data->getCode(), $data->getMessage(), $data->getData()
        );
        return response()->json($formatter->getResponseArray());
      }

      // 登録処理
      DB::beginTransaction();

      foreach ($insert_data as $data) {
        $creative = new CorpusCreative;
        $creative->insert($data);
      }

      // クラスの登録件数更新
      $added_classes = CorpusClass::where('corpus_id', $_corpus_id)->get();
      foreach($added_classes as $class) {
        $added_creative_count = CorpusCreative::where('corpus_class_id', $class->id)->where('data_type', $data_type)->count();
        if($data_type == CorpusDataType::Training) {
          $class->training_data_count = $added_creative_count;
        } else {
          $class->test_data_count = $added_creative_count;
        }        
        $class->save();
      }
      
      // コーパスのステータス更新
      if($data_type == CorpusDataType::Training) {
        $corpus = Corpus::find($_corpus_id);
        $corpus->status = CorpusStateType::Untrained;
        $corpus->save();
      }
      
      DB::commit();

      $formatter = new ApiResponseFormatter(200, 'CSV upload successfull.', [array(
        'message' => CorpusDataType::getDescription($data_type) . 'のCSVアップロードに成功しました。'
      )]);
      return response()->json($formatter->getResponseArray());

    // } catch (\PDOException $e){
    //   DB::rollBack();
    //   $formatter = new ApiResponseFormatter(404, $e->getMessage(), [array(
    //     'message' => 'PDOException from TrainingDataController@upload'
    //   )]);
    //   return response()->json($formatter->getResponseArray());

    // } catch(\Exception $e) {
    //   DB::rollBack();
    //   $formatter = new ApiResponseFormatter(404, $e->getMessage(), [array(
    //     'message' => 'Exception from TrainingDataController@upload'
    //   )]);
    //   return response()->json($formatter->getResponseArray());

    // }
  }

  /**
   * 教師データのCSVダウンロード
   * 
   * @param  int  $_corpus_id
   * @return \Illuminate\Http\Response
   */
  public function download($_corpus_id) 
  {
    // バリデーション
    $user = JWTAuth::parseToken()->authenticate();
    $corpus = Corpus::where('id', $_corpus_id)->where('company_id', $user->company_id)->get();
    if ($corpus->count() == 0) {
      $message = 'Corpus not found. -> corpus_id:' . $_corpus_id;
      $formatter = new ApiResponseFormatter(404, $message, [array(
        'message' => 'ご指定のコーパスは利用できません'
      )]);
      return response()->json($formatter->getResponseArray());
    }

    // ダウンロードヘッダー
    $headers = array(
      "Content-type" => "text/csv",
      "Content-Disposition" => "attachment; filename=training_data.csv",
      "Pragma" => "no-cache",
      "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
      "Expires" => "0"
    );
  
    $callback = function() use ($_corpus_id) {
      $handle = fopen('php://output', 'w');

      // ヘッダー（1行目）
      $columns = [
        'テキスト（この行は削除しないでください。）',
        'クラス',
      ];
      // mb_convert_variables('SJIS-win', 'UTF-8', $columns);
      fputcsv($handle, $columns);


      // データ（2行目以降）
      $training_data = CorpusCreative::select()
        ->join('corpus_classes','corpus_classes.id','=','corpus_creatives.corpus_class_id')
        ->whereIn('corpus_classes.corpus_id', [$_corpus_id])
        ->where('corpus_creatives.data_type', CorpusDataType::Training)
        ->get();

      foreach ($training_data as $data) {
        $csv = [
          $data->content,
          $data->name
        ];
        // mb_convert_variables('SJIS-win', 'UTF-8', $csv);
        fputcsv($handle, $csv);
      }

      fclose($handle);
    };
  
    return response()->stream($callback, 200, $headers);

  }

}
