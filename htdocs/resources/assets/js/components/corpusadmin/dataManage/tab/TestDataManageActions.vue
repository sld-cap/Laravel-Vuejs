<template>
  <div class="row">
    <div class="col-auto mr-auto">
      <button @click="setAddTestCreativeModal" type="button" class="btn btn-outline-info">
        <span data-feather="plus" style="width:20px;height:20px;"></span>
        <span>クラス/テキスト追加</span>
      </button>
    </div>
    <div class="col-auto">
      <button @click="setUploadTestDataCsvModal" type="button" class="btn btn-light">
        <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
        <span>CSVアップロード</span>
      </button>
    </div>

    <AddTestCreativeModal 
      :showModal="showAddTestCreativeModal" 
      @close="closeModal"
      :add-from-data="createModal">
    </AddTestCreativeModal>
    <!-- /.クラステキスト追加モーダル（テストデータ） -->

    <UploadTestDataCsvModal
      :showModal="showUploadTestDataCsvModal" 
      @close="closeModal"
      :upload-form-data="uploadModal">
    </UploadTestDataCsvModal>
    <!-- /.CSVアップロードモーダル（テストデータ） -->

  </div>
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';

import AddTestCreativeModal from '../modal/AddCreativeModal.vue';
import UploadTestDataCsvModal from '../modal/UploadCsvModal.vue';

export default {
  props: [ 'trainingData' ],
  components: {
    AddTestCreativeModal, UploadTestDataCsvModal,
  },
  data() {
    return {
      createModal: {},
      uploadModal: {},
    };
  },
  computed: {
    showAddTestCreativeModal() {
      return this.$store.getters.modalState.showAddTestCreativeModal;
    },
    showUploadTestDataCsvModal() {
      return this.$store.getters.modalState.showUploadTestDataCsvModal;
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
      this.$store.state.modal.addTestCreativeModalFlag = false;
      this.$store.state.modal.uploadTestDataCsvModalFlag = false;
    },
    setAddTestCreativeModal() {
      Core.log('[setAddTestCreativeModal]');
      this.resetAddCrativeModalParams();
      this.createModal.dataType = 0;
      // 先頭のクラスをselectedにする
      this.createModal.classId = this.trainingData[0].class_id;
      this.$store.state.modal.addTestCreativeModalFlag = true;
    },
    setUploadTestDataCsvModal() {
      Core.log('[setUploadTestDataCsvModal]');
      this.resetUploadCsvModalParams();
      this.uploadModal.dataType = 0;
      this.$store.state.modal.uploadTestDataCsvModalFlag = true;
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