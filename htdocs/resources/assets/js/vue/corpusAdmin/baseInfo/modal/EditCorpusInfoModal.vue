<template>
  <CommonModal>
    <div slot="title">コーパスの編集</div>
    <!-- /.title -->
    <div slot="body">
      <!-- <p>
        <small>コーパスを作成し教師データを学習することで、ユーザから入力されたクリエイティブの意図を分類し、結果をAPIとして提供できます。</small>
      </p> -->
      <!-- /message -->
      <div class="form-group">
        <label for="editCorpusName">コーパス名</label>
        <input v-model="data.name" type="text" :class="'form-control' + err.name.invalid" id="editCorpusName" aria-describedby="nameHelp" maxlength="255">
        <small id="nameHelp" class="form-text text-muted">10字程度の識別しやすい名前を記入してください。</small>
        <div class="invalid-feedback">
          {{ err.name.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="editDescription">説明文</label>
        <textarea v-model="data.description" :class="'form-control' + err.description.invalid" id="editDescription" rows="3" maxlength="255"></textarea>
        <!-- <small class="form-text text-muted">1000文字以内で入力してください。</small> -->
        <div class="invalid-feedback">
          {{ err.description.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="selectClass">言語</label>
        <select v-model="data.language" :class="'form-control form-control-sm' + err.language.invalid" id="selectClass">
          <template v-for="(language, i) in corpusLanguageList" >
            <option :value="i" :key="i">{{ language.label }}</option>
          </template>
        </select>
        <div class="invalid-feedback">
          {{ err.language.message }}
        </div>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="execSaveCorpus" type="button" class="btn btn-primary">保存する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'EditCorpusInfoModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      corpusLanguageList: Core.CorpusLanguage,
      data: {},
      option: {},
      err: [],
    };
  },
  computed: {
    ...mapGetters({
      corpusInfo: 'corpusData/corpusInfo',
      errors: 'multiModal/commonError'
    }),
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
  created() {
    Core.log('[created]');
    this.loadApiConfig('saveCorpus');
    this.resetErr();
  },
  mounted() {
    Core.log('[mounted]');
    this.setEditData();
  },
  updated() {
    Core.log('[updated]');
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
    setEditData() {
      Core.log('[method] setEditData');
      this.data.name = this.corpusInfo.name;
      this.data.description = this.corpusInfo.description;
      this.data.language = this.corpusInfo.language;
    },
    // 更新
    execSaveCorpus() {
      Core.log('[method] execSaveCorpus');
      const corpusId = this.$store.getters['commonData/corpusId'];

      this.option.url = this.option.url.replace(/{corpus}/g, corpusId);
      this.option.data = this.data;
      this.$store.dispatch('corpusData/save', { option: this.option });
    },
  },
}
</script>