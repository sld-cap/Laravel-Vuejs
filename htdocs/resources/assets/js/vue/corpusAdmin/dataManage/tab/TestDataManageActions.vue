<template>
  <div class="row">
    <div class="col-auto mr-auto">
      <button @click="openAddCreativeModal(0)" type="button" class="btn btn-outline-info">
        <span data-feather="plus" style="width:20px;height:20px;"></span>
        <span>クラス/テキスト追加</span>
      </button>
    </div>
    <div class="col-auto">
      <button @click="openUploadTrainingCsvModal(0)" type="button" class="btn btn-light">
        <span class="text-muted" data-feather="upload" style="width:20px;height:20px;"></span>
        <span>CSVアップロード</span>
      </button>
    </div>

  </div>
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import { mapActions } from 'vuex'

export default {
  props: [],
  components: {
  },
  data() {
    return {
      createModal: {},
      uploadModal: {},
    };
  },
  computed: {
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