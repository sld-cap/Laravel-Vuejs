<template>
  <CommonModal>
    <div slot="title">アカウントの編集</div>
    <!-- /.title -->
    <div slot="body">

      <div class="row">
        <div class="col">
          <div :class="'form-group bmd-form-group is-filled' + err.sei_kanji.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">姓</label>
            <input v-model="data.sei_kanji" type="text" :class="'form-control' + err.sei_kanji.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
            <div class="invalid-feedback">
              {{ err.sei_kanji.message }}
            </div>
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.col -->
        <div class="col">
          <div :class="'form-group bmd-form-group is-filled' + err.mei_kanji.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">名</label>
            <input v-model="data.mei_kanji" type="text" :class="'form-control' + err.mei_kanji.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
            <div class="invalid-feedback">
              {{ err.mei_kanji.message }}
            </div>
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col">
          <div :class="'form-group bmd-form-group is-filled' + err.email.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">メールアドレス</label>
            <input v-model="data.email" type="text" :class="'form-control' + err.email.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="191">
            <div class="invalid-feedback">
              {{ err.email.message }}
            </div>
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col">
          <div :class="'form-group bmd-form-group' + err.password.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">パスワード（変更する場合は入力してください）</label>
            <input v-model="data.password" type="text" :class="'form-control' + err.password.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
            <div class="invalid-feedback">
              {{ err.password.message }}
            </div>
            <small id="addPwHelp" class="form-text text-muted">パスワードは6文字以上で指定してください</small>
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="execSaveAccount" type="button" class="btn btn-brand">編集</button>
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
  name: 'EditAccountModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      data: {},
      option: {},
      err: [],
      editId: null,
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
      accountList: 'accountData/accountList',
      editIndex: 'multiModal/editAccountIndex',
      errors: 'multiModal/commonError'
    }),
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('saveAccount');
    this.resetErr();
  },
  mounted() {
    Core.log('[mounted]');

    this.data.sei_kanji = this.accountList[this.editIndex].sei_kanji;
    this.data.mei_kanji = this.accountList[this.editIndex].mei_kanji;
    this.data.email = this.accountList[this.editIndex].email;
    this.data.password = '';
    this.editId = this.accountList[this.editIndex].id;
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
    execSaveAccount() {
      Core.log('[execSaveAccount]');
      this.option.data = this.data;
      this.option.url = this.option.url.replace(/{user}/g, this.editId);
      this.$store.dispatch('accountData/save', { option: this.option });
    },
  },
};
</script>