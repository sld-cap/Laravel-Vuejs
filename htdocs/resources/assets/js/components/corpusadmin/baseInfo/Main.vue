<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

    <div class="row mt-3">
      <div class="col-12">
        <SuccessAlert v-if="successMsg !== ''"></SuccessAlert>
        <!-- /.alert -->
        <ErrorAlert v-if="errors.length > 0"></ErrorAlert>
        <!-- /.alert -->
      </div>
    </div>
    <!-- /.row alert-area-->

    <div class="panel-group mt-3">
      <CorpusInfo></CorpusInfo>
    </div>
    <!-- /.panel-group -->

    <div class="panel-group mt-4">
      <div class="panel panel-default">
        <div class="panel-heading border-bottom mb-2">
          <h4 class="panel-title">
            <a data-toggle="collapse" href="#collapse2" style="text-decoration:none;">稼動状況（※※未実装※※）</a>
          </h4>
        </div>
        <div id="collapse2" class="panel-collapse collapse show">
          <div class="row">

            <div class="col-lg-3 col-md-6 col-sm-6">
              <StudyProgress></StudyProgress>
            </div>
            <!-- /.col-lg-3 -->

            <div class="col-lg-3 col-md-6 col-sm-6">
              <TrainingDataAmount></TrainingDataAmount>
            </div>
            <!-- /.col-lg-3 -->

            <div class="col-lg-6 col-md-6 col-sm-6">
              <TrainingDataAmountRaito></TrainingDataAmountRaito>
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->

          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <ClassThreshold></ClassThreshold>
            </div>
            <!-- /.col-lg-6 -->

            <div class="col-lg-6 col-md-12 col-sm-12">
              <TrainingDataRaitoByClass></TrainingDataRaitoByClass>
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- .row -->

        </div>
      </div>
    </div>
    <!-- /.panel-group -->

  </main>
</template>

<style>
  .table-striped button {
    padding: 3px;
  }
  .btnbox {
    width: 10%
  }
  .feather {
    width: 20px;
    height: 20px;
  }
  .table-striped th {
    text-align: center;
  }
  .table-striped td {
    padding: .35rem;
    vertical-align: middle;
    text-align: center;
  }
</style>

<script>
import * as Core from '../../../common/core/app';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';
import ApiConfig from '../../../common/core/apiConfig';
// アラート
import SuccessAlert from '../common/custom/SuccessAlert.vue';
import ErrorAlert from '../common/custom/ErrorAlert.vue';
// 概要
import CorpusInfo from './overview/CorpusInfo.vue';
// ステータス
import StudyProgress from './status/StudyProgress.vue';
import TrainingDataAmount from './status/TrainingDataAmount.vue';
import TrainingDataAmountRaito from './status/TrainingDataAmountRaito.vue';
import ClassThreshold from './status/ClassThreshold.vue';
import TrainingDataRaitoByClass from './status/TrainingDataRaitoByClass.vue';

export default {
  props: ['me'],
  components: {
    // アラート
    SuccessAlert, ErrorAlert,
    // 概要
    CorpusInfo,
    // ステータス
    StudyProgress, TrainingDataAmount, TrainingDataAmountRaito, ClassThreshold, TrainingDataRaitoByClass, 
  },
  data() {
    return {};
  },
  computed: {
    successMsg() {
      return this.$store.getters.successMsg;
    },
    errors() {
      return this.$store.getters.errors;
    },
  },
  created() {
    Core.log('[created]');
    this.$store.state.successMsg = '';
    this.$store.state.errors = [];
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

