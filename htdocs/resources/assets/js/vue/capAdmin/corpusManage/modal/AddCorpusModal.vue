<template>
  <CommonModal>
    <div slot="title">コーパスの作成</div>
    <!-- /.title -->
    <div slot="body">
      <p>コーパスを作成し教師データを学習することで、ユーザから入力されたクリエイティブの意図を分類し、結果をAPIとして提供できます。</p>
      <div :class="'mt-4 form-group bmd-form-group is-filled' + err.name.hasDanger">
        <label for="corpusNameField" class="bmd-label-floating">コーパス名</label>
        <input v-model="data.name" type="text" :class="'form-control' + err.name.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
        <div class="invalid-feedback">
          {{ err.name.message }}
        </div>
        <span class="bmd-help">10字程度の識別しやすい名前を記入してください。</span>
      </div>
      <!-- /.form-group -->
      <div :class="'form-group bmd-form-group is-filled' + err.description.hasDanger">
        <label for="descriptionField" class="bmd-label-floating">説明文</label>
        <textarea v-model="data.description" :class="'form-control' + err.description.invalid" id="descriptionField" rows="2" maxlength="255"></textarea>
        <div class="invalid-feedback">
          {{ err.description.message }}
        </div>
        <span class="bmd-help">30字程度で記入してください。</span>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="selectLanguage">言語</label>
        <select v-model="data.language" :class="'form-control' + err.language.invalid" id="selectLanguage">
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
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="execAddCorpus" type="button" class="btn btn-brand">作成</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import { mapGetters } from 'vuex';

import CommonModal from '../../common/modal/Modal';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'AddCorpusModal',
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
  watch: {
    'errors': {
      handler: function (errors) {
        Core.log('error更新');
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
    this.loadApiConfig('addCorpus');
    this.resetErr();
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
    // エラーリセット
    resetErr() {
      Core.log('[method] resetErr');
      this.err = Lib.resetFormError(this.data);
      Core.log(this.err);
    },
    // コーパス登録処理
    execAddCorpus() {
      Core.log('[method] execAddCorpus');
      this.option.data = this.data;
      this.$store.dispatch('corpusData/add', { option: this.option });
    },
  },
};
</script>