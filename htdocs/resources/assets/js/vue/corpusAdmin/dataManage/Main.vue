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
            <a class="btn btn-outline-brand nav-link active mr-1" id="training-tab" 
              data-toggle="tab" href="#training" role="tab" aria-controls="training" aria-selected="true">学習データ
            </a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-info nav-link" id="test-tab" 
              data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="false">テストデータ
            </a>
          </li>
          <li class="nav-item w-50 ">
            <input class="form-control form-control-dark border-bottom ml-5" type="text" placeholder="キーワード検索" aria-label="キーワード検索">
          </li>
        </ul>
        <!-- /.nav -->
      </div>
    </div>
    <!-- /.row -->

    <section class="viewCreativeContents mt-3" style="width:100%;">
      <div class="tab-content" id="pills-tabContent">

        <!-- 学習データタブ -->
        <div class="tab-pane fade show active" id="training" role="tabpanel" aria-labelledby="training-tab" style="width:100%;"> 
          <TrainingDataManageActions></TrainingDataManageActions>
          <TrainingDataTable></TrainingDataTable>
        </div>
        <!-- /学習データタブ -->

        <!-- テストデータタブ -->
        <div class="tab-pane fade" id="test" role="tabpanel" aria-labelledby="test-tab">
          <TestDataManageActions></TestDataManageActions>
          <TestDataTable></TestDataTable>
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
import { mapGetters } from 'vuex';
// アラート
import ProductionNoticeAlert from './alert/ProductionNoticeAlert.vue';
import IsTrainingAlert from './alert/IsTrainingAlert.vue';
// データ管理
import TrainingDataManageActions from './tab/TrainingDataManageActions.vue';
import TrainingDataTable from './tab/TrainingDataTable.vue';
import TestDataManageActions from './tab/TestDataManageActions.vue';
import TestDataTable from './tab/TestDataTable.vue';

export default {
  components: {
    // アラート
    ProductionNoticeAlert, IsTrainingAlert,
    // タブ
    TrainingDataManageActions, TrainingDataTable,TestDataManageActions, TestDataTable,
  },
  props: ['me', 'corpusId'],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      corpusInfo: 'corpusData/corpusInfo',
    }),
  },
  created() {
    Core.log('[created]');
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

