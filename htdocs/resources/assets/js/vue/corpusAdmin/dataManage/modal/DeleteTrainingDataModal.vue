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
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
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
      deleteData: {
        creative_id: this.$store.getters['multiModal/deleteTrainingData'].creative_id,
      },
    };
  },
  computed: {
  },
  watch: {
  },
  created() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    deleteExec() {
      this.$store.dispatch('corpusTrainingData/deleteTrainingData', this.deleteData);
    },
  },
};
</script>
