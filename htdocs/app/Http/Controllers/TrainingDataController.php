<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Models\Corpus;

use App\Models\Business\ApiResponseFormatter;
use App\Models\Business\TrainingDataManager;

class TrainingDataController extends Controller
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
     * 指定コーパスの教師データ一覧をJSONで返す
     *
     * @param  int  $_corpus_id
     * @return \Illuminate\Http\Response
     */
    public function show($_corpus_id)
    {
        if (Corpus::find($_corpus_id)) {
            $train_data = new TrainingDataManager($_corpus_id);
            return response()->json( $train_data->loadTrainingDataAll() );
        } else {
            return response()->json([
                'code' => '404', 
                'message' => 'Not Found.',
                'error' => array(
                    'input_corpus_id' => $_corpus_id,
                    'error_message' => 'The specified corpus does not exist.'
                )
            ]);
        }
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
