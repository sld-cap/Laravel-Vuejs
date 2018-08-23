<template>
  <div class="panel panel-default">
    <div class="panel-heading border-bottom mb-2">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse2" style="text-decoration:none;">稼動状況（※※未実装※※）</a>
      </h4>
    </div>
    <!-- /.panel-heading -->

    <div v-if="loading" id="collapse2" class="panel-collapse collapse show">
      <Loading />
    </div>
    <!-- /.panel-collapse // loading -->

    <div v-else-if="Object.keys(corpusInfo).length === 0" id="collapse2" class="panel-collapse collapse show">
      <p>該当のコーパスデータが見つかりませんでした</p>
    </div>
    <!-- /.panel-collapse // 0件 -->

    <div v-else-if="Object.keys(corpusInfo).length > 0" d="collapse2" class="panel-collapse collapse show">
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
    <!-- /.panel-collapse -->
  </div>
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
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';

import StudyProgress from './StudyProgress.vue';
import TrainingDataAmount from './TrainingDataAmount.vue';
import TrainingDataAmountRaito from './TrainingDataAmountRaito.vue';
import ClassThreshold from './ClassThreshold.vue';
import TrainingDataRaitoByClass from './TrainingDataRaitoByClass.vue';

import { mapGetters } from 'vuex';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  props: ['me'],
  components: {
    StudyProgress, TrainingDataAmount, TrainingDataAmountRaito, ClassThreshold, TrainingDataRaitoByClass, 
    Loading, 
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loading: 'corpusData/loading',
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
    openDeleteCorpusInfoModal() {
      Core.log('[openDeleteCorpusInfoModal]');
      this.$store.dispatch('multiModal/showDeleteCorpusInfoModal');
    },
  },
};
</script>

