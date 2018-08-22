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
        <input v-model="form.name" type="text" :class="'form-control' + err.name.invalid" id="editCorpusName" aria-describedby="nameHelp" maxlength="255">
        <small id="nameHelp" class="form-text text-muted">10字程度の識別しやすい名前を記入してください。</small>
        <div class="invalid-feedback">
          {{ err.name.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="editDescription">説明文</label>
        <textarea v-model="form.description" :class="'form-control' + err.description.invalid" id="editDescription" rows="3" maxlength="255"></textarea>
        <!-- <small class="form-text text-muted">1000文字以内で入力してください。</small> -->
        <div class="invalid-feedback">
          {{ err.description.message }}
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="selectClass">言語</label>
        <select v-model="form.language" :class="'form-control form-control-sm' + err.language.invalid" id="selectClass">
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
      <button @click="saveCorpusInfo" type="button" class="btn btn-primary">保存する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';
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
      form: {
        corpus_id: this.$store.getters['commonData/corpusId'],
        name: '',
        description: '',
        language: '',
      },
      err: [],
    };
  },
  computed: {
    ...mapGetters({
      corpusInfo: 'corpusData/corpusInfo',
      errors: 'multiModal/corpusEditError'
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
    // 編集データセット
    setEditData() {
      Core.log('[setEditData]');
      this.form.name = this.corpusInfo.name;
      this.form.description = this.corpusInfo.description;
      this.form.language = this.corpusInfo.language;
      Core.log(this.form);
    },
    // 更新
    saveCorpusInfo() {
      Core.log('[saveCorpusInfo]');
      Core.log(this.form);
      this.$store.dispatch('corpusData/saveCorpus', this.form);
    },
    // エラーリセット
    resetErr() {
      this.err = {
        name: {
          invalid: '',
          message: '',
        },
        description: {
          invalid: '',
          message: '',
        },
        language: {
          invalid: '',
          message: '',
        },
      };
    }
  },
}
</script>