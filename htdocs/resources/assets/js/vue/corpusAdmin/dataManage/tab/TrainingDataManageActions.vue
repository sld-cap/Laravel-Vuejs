<template>
  <div class="row">
    <div class="col-auto mr-auto">
      <button @click="openAddCreativeModal(1)" type="button" class="btn btn-outline-brand">
        <span data-feather="plus" style="width:20px;height:20px;"></span>
        <span>クラス/テキスト追加</span>
      </button>
    </div>
    <div class="col-auto">
      <button @click="openUploadTrainingCsvModal(1)" type="button" class="btn btn-light">
        <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
        <span>CSVアップロード</span>
      </button>
      <!-- <a href="/corpus/csv/download/1" class="btn btn-light" role="button" aria-pressed="true"> -->
      <a @click="execDownloadTrainingCsv" href="javascript:void(0)" class="btn btn-light" role="button" aria-pressed="true">
        <span class="text-muted" data-feather="download" style="width:20px;height:20px;"></span>
        <span>CSVダウンロード</span>
      </a>
      <button @click="downloadSampleCsv" type="button" class="btn btn-link">
        サンプル
      </button>
    </div>

  </div>
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';

export default {
  props: [],
  components: {
  },
  data() {
    return {
      option: {},
    };
  },
  computed: {
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('downloadTrainingData');
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      Core.log(this.data);
    },
    openAddCreativeModal(dataType) {
      Core.log('[method] openAddCreativeModal');
      this.$store.dispatch('multiModal/showAddTrainingDataModal', { dataType });
    },
    openUploadTrainingCsvModal(dataType) {
      Core.log('[method] openUploadTrainingCsvModal');
      this.$store.dispatch('multiModal/showUploadTrainingCsvModal', { dataType });
    },
    execDownloadTrainingCsv() {
      Core.log('[method] execDownloadTrainingCsv');
      const corpusId = this.$store.getters['commonData/corpusId'];
      this.option.url = this.option.url.replace(/{corpus_id}/g, corpusId);
      this.$store.dispatch('corpusTrainingData/download', { option: this.option });
    },
    downloadSampleCsv() {
      const url = '/files/corpus-admin/training_data_sample.csv';
      const filename = 'training_data_sample.csv';
      Lib.execFileDownload(url, filename);
    },
  },
}
</script>