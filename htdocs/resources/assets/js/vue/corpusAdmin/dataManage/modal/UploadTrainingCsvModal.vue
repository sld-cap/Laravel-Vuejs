<template>
  <CommonModal modalSize="modal-lg">
    <div v-if="form.data_type === 1" slot="title">学習データのアップロード</div>
    <div v-if="form.data_type === 0" slot="title">テストデータのアップロード</div>
    <!-- /.title -->
    <div slot="body">
      <div v-if="form.data_type === 1" class="alert alert-danger mt-1" role="alert">
        <ul style="margin-bottom: 0;">
          <li>既に登録されている学習データは削除されます。</li>
          <li>学習データは5-15,000件での範囲で準備してください。</li>
          <li>学習データのテキストはそれぞれ1,024文字以内で準備してください。</li>
        </ul>
      </div>
      <!-- /.alert -->
      <div v-if="form.data_type === 0" class="alert alert-warning mt-1" role="alert">
        <ul style="margin-bottom: 0;">
          <li>テストデータは、学習データの10％を目安に準備することを推奨しています。</li>
        </ul>
      </div>
      <!-- /.alert -->
      <div class="form-group mt-4">
        <input type="file" value="ファイルを選択" name="csv_file" required="">
      </div>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="upload" type="button" class="btn btn-primary">アップロードする</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/modal/Modal';

import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'UploadTrainingCsvModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      form: {
        data_type: this.$store.getters['multiModal/currentDataType'],
      },
    };
  },
  computed: {
  },
  crated() {
  },
  mounted() {
  },
  methods: {
    // 登録
    upload() {
      Core.log('[upload]');
      Core.log(this.form);
      this.$store.dispatch('corpusTrainingData/uploadTrainingDataCsv', this.form);
    },
  },
};
</script>
