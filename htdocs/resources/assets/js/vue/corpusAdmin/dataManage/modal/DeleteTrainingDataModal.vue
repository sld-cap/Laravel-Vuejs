<template>
  <CommonModal>
    <div slot="title">テキスト削除</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-danger" role="alert">
        テキストを削除しようとしています。
      </div>
      <!-- /.alert -->

      <div class="default-form-area mt-4">
        <p>削除をやめる場合は、キャンセルボタンを押してください。</p>
      </div>
      <!-- /.default-form-area -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">キャンセル</button>
      <button @click="deleteExec" type="button" class="btn btn-danger">削除する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'DeleteTrainingDataModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      option: {},
      data: {},
      creative_id: this.$store.getters['multiModal/deleteTrainingData'].creative_id,
    };
  },
  computed: {
  },
  watch: {
  },
  created() {
    Core.log('[crated]');
    this.loadApiConfig('deleteTrainingData');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      this.data = config.data;
      Core.log(this.data);
    },
    // 削除
    deleteExec() {
      Core.log('[method] addTrainingData');
      this.option.url = this.option.url.replace(/{creative_id}/g, this.creative_id);
      this.$store.dispatch('corpusTrainingData/delete', { option: this.option });
    },
  },
};
</script>
