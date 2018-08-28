<template>
  <div class="row">
    <template v-if="corpusInfo.status == 1 || trainingDataCount === 0">
      <div class="col-12">
        <NoTrainingDataAlert></NoTrainingDataAlert>
        <!-- /.alert -->
      </div>
      <!-- /.col -->
    </template>
    <!-- /template // 教師データなし -->

    <template v-else>
      <div class="col-auto mr-auto">
        <button @click="openAddCreativeModal(0)" type="button" class="btn btn-outline-info">
          <span data-feather="plus" style="width:20px;height:20px;"></span>
          <span>クラス/テキスト追加</span>
        </button>
      </div>
      <!-- /.col -->
      <div class="col-auto">
        <button @click="openUploadTrainingCsvModal(0)" type="button" class="btn btn-light">
          <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
          <span>CSVアップロード</span>
        </button>
      </div>
      <!-- /.col -->
    </template>
    <!-- /template // 教師データあり -->

  </div>
  <!-- /.row -->
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters, mapActions } from 'vuex'

import NoTrainingDataAlert from '../alert/NoTrainingDataAlert.vue';

export default {
  props: [],
  components: {
    NoTrainingDataAlert,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      loading: 'corpusTrainingData/loading',
      corpusInfo: 'corpusData/corpusInfo',
      trainingDataCount: 'corpusTrainingData/trainingDataCount',
    }),
  },
  created() {
    Core.log('[created]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
    openAddCreativeModal(dataType) {
      this.$store.dispatch('multiModal/showAddTrainingDataModal', { dataType });
    },
    openUploadTrainingCsvModal(dataType) {
      this.$store.dispatch('multiModal/showUploadTrainingCsvModal', { dataType });
    },
  },
}
</script>