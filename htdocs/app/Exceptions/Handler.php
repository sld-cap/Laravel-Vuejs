<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        // ルーティングで認められていないHTTPメソッドが呼ばれたケース
        if (basename(str_replace('\\','/',get_class($exception))) == 'MethodNotAllowedHttpException') 
        {
            return response()->json(['error'=>'HTTP Method Not Allowed'],405);
        }

        // ルーティングで定義されていないURIが呼ばれたケース
        if (basename(str_replace('\\','/',get_class($exception))) == 'NotFoundHttpException') 
        {
            return response()->json(['error'=>'URI Not Found'],404);
        }

        // 値のないIDが呼ばれたケース
        if(basename(str_replace('\\','/',get_class($exception))) == 'ModelNotFoundException') 
        {
            return response()->json(['error'=>'Record Not Found'],404);
        }

        return parent::render($request, $exception);
    }
}
