<template>
  <CommonModal>
    <div v-if="data.data_type === 1" slot="title">クラス／テキスト編集（学習データ）</div>
    <div v-if="data.data_type === 0" slot="title">クラス／テキスト編集（テストデータ）</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-warning" role="alert">
        クラス／テキストを変更できます
      </div>
      <!-- /.alert -->
      <div class="form-group">
        <label for="addContent">テキスト</label>
        <textarea v-model="data.content" :class="'form-control' + err.content.invalid" id="addContent" rows="3"></textarea>
        <small class="form-text text-muted">1024文字以内で入力してください。</small>
        <div class="invalid-feedback">
          {{ err.content.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label :for="'selectEditClass_' + this.data.data_type">クラス選択</label>
        <select v-model="data.corpus_class_id" :class="'form-control form-control-sm' + err.corpus_class_id.invalid" :id="'selectEditClass_' + this.data.data_type">
          <template v-for="classData in trainingData">
            <option :value="classData.class_id" :key="classData.class_id">{{ classData.name }}</option>
          </template>
        </select>
        <div class="invalid-feedback">
          {{ err.corpus_class_id.message }}
        </div>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="openDeleteTrainingDataModal" type="button" class="btn btn-secondary">削除する</button>
      <button @click="saveTrainingData" type="button" class="btn btn-primary">変更する</button>
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
  name: 'EditTrainingDataModal',
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
        Core.log('[watch] error更新');
        Core.log(errors);
        Core.log(this.err);
        // エラー表示処理
        this.resetErr();
        this.setErrData(errors);
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters({
      trainingData: 'corpusTrainingData/trainingData',
      errors: 'multiModal/commonError',
    }),
  },
  created() {
    Core.log('[crated]');
    this.loadApiConfig('saveTrainingData');
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
    // 編集データセット
    setParams() {
      Core.log('[method] setParams');
      const editData = this.$store.getters['multiModal/editTrainingData'];

      this.data.corpus_id = this.$store.getters['commonData/corpusId'];
      this.data.data_type = this.$store.getters['multiModal/currentDataType'];
      this.data.corpus_class_id = editData.class_id;
      this.data.creative_id = editData.creative_id;
      this.data.content = editData.content;
    },
    // 更新
    saveTrainingData() {
      Core.log('[method] saveTrainingData');
      this.option.data = this.data;
      this.option.url = this.option.url.replace(/{creative_id}/g, this.data.creative_id);
      this.$store.dispatch('corpusTrainingData/save', { option: this.option });
    },
    // 削除モーダル表示
    openDeleteTrainingDataModal() {
      Core.log('[openDeleteTrainingDataModal]');
      this.$store.dispatch('multiModal/showDeleteTrainingDataModal', this.data.creative_id);
    },
  },
};
</script>
