<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\Corpus;
use App\Models\Bussiness\ApiResponseFormatter;

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
    //
  }

  /**
   * 指定コーパスの情報をJSONにして返す
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($_id)
  {
    // APIレスポンスの整形クラス
    $formatter = new ApiResponseFormatter();

    try {
      $corpus = Corpus::findOrFail($_id);
      $formatter->toFormatArray('200');
      $formatter->setMessage('Find Successful.');
      $formatter->setContents($corpus->toArray());

    } catch (ModelNotFoundException $e) {
      $formatter->toFormatArray('404');
      $formatter->setMessage($e->getMessage());

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
