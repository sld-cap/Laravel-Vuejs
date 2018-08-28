<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">
    <section>

      <div class="row">
        <!-- todo: エラーコンポーネントを表示する -->
      </div>
      <!-- /.row -->

      <div class="row">
        <!-- 学習ステップ  -->
        <div class="col-8">
          <h4>学習ステップ</h4>
          <div class="card bg-light mb-3">
            <div class="card-body">
              <table class="step-list">
                <Step1 /><!-- 01 教師データ登録 -->
                <Step2 /><!-- 02 AI学習の実行 -->
                <Step3 /><!-- 03 AI学習結果のテスト -->
                <Step4 /><!-- 04 AI回答の個別検証 -->
                <Step5 /><!-- 05 学習データの修正 -->
                <Step6 /><!-- 06 AI判定の閾値設定 -->
                <Step7 /><!-- 07 本番反映 -->
              </table>
            </div><!-- .card-body -->
          </div><!-- .card -->
        </div>

        <div class="col-4 text-align-center" style="border-left:solid 1px lightgray;">
          <h4 class="text-align-left">これまでの学習状況</h4>
          <div class="row">
            <!--  学習結果棒グラフ -->
            <div class="col-12">
              <CurrentStatus />
              <LatestSummary />
            </div>
          </div>
        </div>
        <!-- /.col -->

      </div>
      <!-- /.row -->
    </section>
  </main>
</template>

<script>
import * as Core from '../../../common/core/app';
import { mapActions, mapGetters } from 'vuex';

// 学習ステップコンポーネント
import Step1 from './stepList/step1.vue';
import Step2 from './stepList/step2.vue';
import Step3 from './stepList/step3.vue';
import Step4 from './stepList/step4.vue';
import Step5 from './stepList/step5.vue';
import Step6 from './stepList/step6.vue';
import Step7 from './stepList/step7.vue';
// これまでの学習状況
import CurrentStatus from './trainingStatus/currentStatus.vue';
import LatestSummary from './trainingStatus/latestSummary.vue';


export default {
  props: ['me', 'corpusId'],
  components: {
    // 学習ステップ
    Step1, Step2, Step3, Step4, Step5, Step6, Step7, 
    // これまでの学習状況
    CurrentStatus, LatestSummary,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
    Core.log('[created] TrainingManage/Main.vue');
    this.$store.state.successMsg = '';
    this.$store.state.errors = [];
  },
  updated: function() {
    Core.log('[updated] TrainingManage/Main.vue');
  },
  mounted: function() {
    Core.log('[mounted] TrainingManage/Main.vue');
    this.getCorpusInfo();
    feather.replace();
  },
  methods: {
    ...mapActions({
      getCorpusInfo: 'corpusData/getDetail',
    }),
  },
};
</script>

<style>
  p {
    margin-bottom: 0;
  }
  .step-list__line {
    border-bottom: 1px solid #DDD;
  }
  .step-list__line:first-child {
    border-top: 1px solid #DDD;
  }
  .step-list__cell {
    padding-top: 10px;
    padding-bottom: 5px;
    padding-right: 10px;
    vertical-align: middle;
  }
  .step-list__cell .row {
    max-height: 70px;
  }        
  .step-list__down--blue .step-list__rect {
    background-color: #3498db;
  }
  .step-list__down--blue .step-list__tri {
    border-top: 15px solid #3498db;
  }
  .step-list__down--red .step-list__rect {
    background-color: #c0392b;
  }
  .step-list__down--red .step-list__tri {
    border-top: 15px solid #c0392b;
  }
  .step-list__down--yellow .step-list__rect {
    background-color: #f39c12;
  }
  .step-list__down--yellow .step-list__tri {
    border-top: 15px solid #f39c12;
  }
  .step-list__rect {
    width: 60px;
    height: 45px;
    background-color: #3498db;
    -moz-border-radius: 3px 3px 0 0;
    -webkit-border-radius: 3px;
    border-radius: 3px 3px 0 0;
    color: white;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    font-size: 24px;
    letter-spacing: 0.1em;
  }
  .step-list__tri {
    width: 0;
    height: 0;
    border-right: 30px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 30px solid transparent;
  }
  .step-list__heading {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .step-list__text {
    font-size: 0.95rem;
    color: dimgray;
  }
  .card-body {
    padding: 0.9rem;
  }
  .step-list__line:first-child {
    border-top: none;
  }
  .text-align-center {
    text-align: center;
  }
  .text-align-left {
    text-align: left;
  }
  .mt-15 {
    margin-top: 15px;
  }
  .form_threshold {
    width: 70%;
    margin: 15px auto 0 auto;
  }
  .col-form-label {
    text-align: right;
    font-weight: bold;
    
  }
</style>
