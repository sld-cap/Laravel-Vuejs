<template>
  <CommonModal modalSize="modal-lg">
    <div v-if="data.data_type === 1" slot="title">学習データのアップロード</div>
    <div v-if="data.data_type === 0" slot="title">テストデータのアップロード</div>
    <!-- /.title -->
    <div slot="body">
      <div v-if="data.data_type === 1" class="alert alert-danger mt-1" role="alert">
        <ul style="margin-bottom: 0;">
          <li>既に登録されている学習データは削除されます。</li>
          <li>学習データは5-15,000件での範囲で準備してください。</li>
          <li>学習データのテキストはそれぞれ1,024文字以内で準備してください。</li>
        </ul>
      </div>
      <!-- /.alert -->
      <div v-if="data.data_type === 0" class="alert alert-warning mt-1" role="alert">
        <ul style="margin-bottom: 0;">
          <li>テストデータは、学習データの10％を目安に準備することを推奨しています。</li>
        </ul>
      </div>
      <!-- /.alert -->
      <div class="form-group mt-4">
        <input @change="setUploadFile" type="file" value="ファイルを選択" name="csv_file"  :class="'form-control' + err.csv_file.invalid">
        <div class="invalid-feedback">
          {{ err.csv_file.message }}
        </div>
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
import * as Lib from '../../../../common/ext/functions';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'UploadTrainingCsvModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      data: {},
      option: {},
      err: [],
    };
  },
  watch: {
    'errors': {
      handler: function (errors) {
        // エラー表示処理
        this.resetErr();
        this.setErrData(errors);
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters({
      errors: 'multiModal/commonError'
    }),
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('uploadTrainingData');
    this.resetErr();
  },
  mounted() {
    Core.log('[mounted]');
    this.setParams();
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      this.data = config.data;
      Core.log(this.data);
    },
    // エラーリセット
    resetErr() {
      Core.log('[method] resetErr');
      this.err = Lib.resetFormError(this.data);
      Core.log(this.err);
    },
    setParams() {
      this.data.data_type = this.$store.getters['multiModal/currentDataType'];
    },
    // 選択ファイルセット
    setUploadFile(e) {
      e.preventDefault();
      const files = e.target.files;
      this.data.csv_file = files[0];
    },
    // 登録
    upload() {
      Core.log('[method] upload');
      this.option.data = this.data;
      const corpusId = this.$store.getters['commonData/corpusId'];
      this.option.url = this.option.url.replace(/{corpus_id}/g, corpusId);
      // FormDataに変換
      const selected_file = this.data.csv_file;
      const current_data_type = this.data.data_type;
      this.option.data = new FormData();
      this.option.data.append('csv_file', selected_file);
      this.option.data.append('data_type', current_data_type);

      this.$store.dispatch('corpusTrainingData/upload', { option: this.option });
    },
  },
};
</script>
