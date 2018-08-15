<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\Corpus;
use App\User;
use App\Models\Business\ApiResponseFormatter;

class CorpusController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    // リクエストのバリデーション
    return response()->json($request);

    // APIレスポンスの整形準備
    $formatter = new ApiResponseFormatter();

    // リクエスト不正の場合はエラーコード400を返答
    // if () {

    // }
    // 存在しないリソースにアクセスされた場合はエラーコード404を応答
    // バリデーションエラーの場合はエラーコード422を応答
  }

  /**
   * 指定コーパスの情報をJSONにして返す
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($_id)
  {
    try {
      // レスポンスデータの生成
      $corpus_array = Corpus::findOrFail($_id)->toArray();
      
      // 作成者、更新者の名前をデータに追加
      $create_user = User::findOrFail($corpus_array['create_user_id']);
      $create_user_name = $create_user->sei_kanji . $create_user->mei_kanji;
      $update_user = User::findOrFail($corpus_array['update_user_id']);
      $update_user_name = $update_user->sei_kanji . $create_user->mei_kanji;
      $corpus_array['create_user_name'] = $create_user_name;
      $corpus_array['update_user_name'] = $update_user_name;
      
      $formatter = new ApiResponseFormatter(200, 'Find Successful.', $corpus_array);

    } catch (ModelNotFoundException $e) {
      $formatter = new ApiResponseFormatter(404, $e->getMessage(), array());
    }

    return response()->json($formatter->getResponseArray());
  }

  /**
   * 指定コーパスの登録ずみ教師データを返す
   * 
   */
  public function showTrainingData($_corpus_id)
  {
    
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
