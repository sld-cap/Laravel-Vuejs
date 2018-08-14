<template>
  <div class="row">
    <div class="col-auto mr-auto">
      <button @click="setAddTrainingCreativeModal" type="button" class="btn btn-outline-brand">
        <span data-feather="plus" style="width:20px;height:20px;"></span>
        <span>クラス/テキスト追加</span>
      </button>
    </div>
    <div class="col-auto">
      <button @click="setUploadTrainingDataCsvModal" type="button" class="btn btn-light">
        <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
        <span>CSVアップロード</span>
      </button>
      <a href="/corpus/csv/download/1" class="btn btn-light" role="button" aria-pressed="true">
        <span class="text-muted" data-feather="download" style="width:20px;height:20px;"></span>
        <span>CSVダウンロード</span>
      </a>
      <button type="button" class="btn btn-link">
        <span><a href="/files/corpus-admin/training_data_sample.csv">サンプル</a></span>
      </button>
    </div>

    <AddTrainingCreativeModal 
      :showModal="showAddTrainingCreativeModal" 
      @close="closeModal"
      :add-from-data="createModal">
    </AddTrainingCreativeModal>
    <!-- /.クラステキスト追加モーダル（学習データ） -->

    <UploadTrainingDataCsvModal
      :showModal="showUploadTrainingDataCsvModal" 
      @close="closeModal"
      :upload-form-data="uploadModal">
    </UploadTrainingDataCsvModal>
    <!-- /.CSVアップロードモーダル（学習データ） -->
  </div>
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';

import AddTrainingCreativeModal from '../modal/AddCreativeModal.vue';
import UploadTrainingDataCsvModal from '../modal/UploadCsvModal.vue';

export default {
  props: [ 'trainingData' ],
  components: {
    AddTrainingCreativeModal, UploadTrainingDataCsvModal, 
  },
  data() {
    return {
      createModal: {},
      uploadModal: {},
    };
  },
  computed: {
    showAddTrainingCreativeModal() {
      return this.$store.getters.modalState.showAddTrainingCreativeModal;
    },
    showUploadTrainingDataCsvModal() {
      return this.$store.getters.modalState.showUploadTrainingDataCsvModal;
    },
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
    showModal() {
      Core.log('[showModal]');
    },
    closeModal() {
      this.$store.state.modal.addTrainingCreativeModalFlag = false;
      this.$store.state.modal.uploadTrainingDataCsvModalFlag = false;
    },
    // 登録モーダル向け
    setAddTrainingCreativeModal() {
      Core.log('[setAddTrainingCreativeModal]');
      this.resetAddCrativeModalParams();
      this.createModal.dataType = 1;
      // 先頭のクラスをselectedにする
      this.createModal.classId = this.trainingData[0].class_id;
      this.$store.state.modal.addTrainingCreativeModalFlag = true;
    },
    // アップロード系モーダル向け
    setUploadTrainingDataCsvModal() {
      Core.log('[setUploadTrainingDataCsvModal]');
      this.resetUploadCsvModalParams();
      this.uploadModal.dataType = 1;
      this.$store.state.modal.uploadTrainingDataCsvModalFlag = true;
    },
    resetAddCrativeModalParams() {
      Core.log('[resetAddCrativeModalParams]');
      this.createModal = {
        content: '',
        classId: '',
        newClassName: '',
        dataType: '',
      };
    },
    resetUploadCsvModalParams() {
      Core.log('[resetUploadCsvModalParams]');
      this.uploadModal = {
        dataType: '',
      };
    },
  },
}
</script>