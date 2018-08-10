<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">
    
    <div class="row mt-3">
      <div class="col-12">
        <ProductionNoticeAlert v-if="corpusInfo.is_production === '1'"></ProductionNoticeAlert>
        <!-- /.alert -->
        <IsTrainingAlert v-if="corpusInfo.status === '3'"></IsTrainingAlert>
        <!-- /.alert -->
      </div>
    </div>
    <!-- /.row alert-area-->

    <div class="row mt-3">
      <div class="col-12">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="btn btn-outline-brand nav-link active mr-1" id="training-tab" data-toggle="tab" href="#training" role="tab" aria-controls="training" aria-selected="true">学習データ</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-info nav-link" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="false">テストデータ</a>
          </li>
          <li class="nav-item w-50 ">
            <input class="form-control form-control-dark border-bottom ml-5" type="text" placeholder="キーワード検索" aria-label="キーワード検索">
          </li>
        </ul>
        <!-- /.nav -->
      </div>
    </div>
    <!-- /.row -->

    <div class="row mt-3">
      <div class="col-12">
        <SuccessAlert v-if="successMsg !== ''"></SuccessAlert>
        <!-- /.alert -->
        <ErrorAlert v-if="errors.length > 0"></ErrorAlert>
        <!-- /.alert -->
      </div>
    </div>
    <!-- /.row alert-area-->

    <section class="viewCreativeContents mt-3" style="width:100%;">
      <div class="tab-content" id="pills-tabContent">

        <!-- 学習データタブ -->
        <div class="tab-pane fade show active" id="training" role="tabpanel" aria-labelledby="training-tab" style="width:100%;"> 
          <TrainingDataManageActions :trainingData="trainingData"></TrainingDataManageActions>
          <!-- /.row -->

          <div class="row mt-2" v-if="corpusInfo.status === 1" >
            <div class="col-12">
              <NoTrainingDataAlert></NoTrainingDataAlert>
              <!-- /.alert -->
            </div>
          </div>
          <!-- /.row -->
          <TrainingDataTable v-else :trainingData="trainingData"></TrainingDataTable>
        </div>
        <!-- /学習データタブ -->

        <!-- テストデータタブ -->
        <div class="tab-pane fade" id="test" role="tabpanel" aria-labelledby="test-tab">
          <div v-if="corpusInfo.status === 1" class="row mt-2">
            <div class="col-12">
              <NoTrainingDataAlert></NoTrainingDataAlert>
            <!-- /.alert -->
            </div>
          </div>
          <!-- /.row -->

          <TestDataManageActions v-if="corpusInfo.status !== 1" :trainingData="trainingData"></TestDataManageActions>
          <TestDataTable v-if="corpusInfo.status !== 1" :trainingData="trainingData"></TestDataTable>
        </div>
        <!-- テストデータタブ -->

      </div>
      <!-- /.tab-content -->
    </section>
    <!-- /#viewCreativeContents -->
  </main>
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';
import ApiConfig from '../../../common/core/apiConfig';
// アラート
import ProductionNoticeAlert from './alert/ProductionNoticeAlert.vue';
import IsTrainingAlert from './alert/IsTrainingAlert.vue';
import SuccessAlert from './alert/SuccessAlert.vue';
import ErrorAlert from './alert/ErrorAlert.vue';
import NoTrainingDataAlert from './alert/NoTrainingDataAlert.vue';
// データ管理
import TrainingDataManageActions from './tab/TrainingDataManageActions.vue';
import TrainingDataTable from './tab/TrainingDataTable.vue';
import TestDataManageActions from './tab/TestDataManageActions.vue';
import TestDataTable from './tab/TestDataTable.vue';

export default {
  components: {
    // アラート
    ProductionNoticeAlert, IsTrainingAlert, SuccessAlert, ErrorAlert, NoTrainingDataAlert,
    // タブ
    TrainingDataManageActions, TrainingDataTable,TestDataManageActions, TestDataTable,
  },
  props: ['me'],
  data() {
    return {
      corpusId: this.$route.params.corpusId,
    };
  },
  computed: {
    corpusInfo() {
      return this.$store.getters.corpusInfo;
    },
    trainingData() {
      return this.$store.getters.trainingData;
    },
    successMsg() {
      return this.$store.getters.successMsg;
    },
    errors() {
      return this.$store.getters.errors;
    },
  },
  created() {
    this.$store.commit('setCorpusId', { corpusId: this.corpusId });
    // 各種情報取得
    this.$store.dispatch('getCorpusInfoAtDataManage');
    this.$store.dispatch('getTrainingData');
  },
  updated: function() {
    Core.log('[updated]');
  },
  mounted: function() {
    Core.log('[mounted]');
    feather.replace();
  },
  methods: {
  },
};
</script>

