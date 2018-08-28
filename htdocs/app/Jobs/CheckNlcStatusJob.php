<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Models\Business\NaturalLangageClassifierManager;

class CheckNlcStatusJob implements ShouldQueue
{
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  private $corpus_id; // コーパスID

  /**
   * + コンストラクタ：Create a new job instance.
   *
   * @return void
   */
  public function __construct($_corpus_id)
  {
    $this->corpus_id = $_corpus_id;
  }

  /**
   * + ジョブの実行
   *
   * @return void
   */
  public function handle()
  {
    // NLCのステータス確認APIを実行
    try {
      $nlc = new NaturalLangageClassifierManager($this->corpus_id);
      $nlc->setStatus();
    } catch (\Exception $e) {
    //   $formatter = new ApiResponseFormatter(400, $e->getMessage(), );

    }
  }
}
