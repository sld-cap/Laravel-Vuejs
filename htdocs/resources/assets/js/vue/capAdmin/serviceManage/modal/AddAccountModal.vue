<template>
  <CommonModal>
    <div slot="title">アカウントの新規作成</div>
    <!-- /.title -->
    <div slot="body">

      <div class="row">
        <div class="col">
          <div :class="'form-group bmd-form-group' + err.sei_kanji.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">姓</label>
            <input v-model="postData.sei_kanji" type="text" :class="'form-control' + err.sei_kanji.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
            <div class="invalid-feedback">
              {{ err.sei_kanji.message }}
            </div>
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.col -->
        <div class="col">
          <div :class="'form-group bmd-form-group' + err.mei_kanji.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">名</label>
            <input v-model="postData.mei_kanji" type="text" :class="'form-control' + err.mei_kanji.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
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
          <div :class="'form-group bmd-form-group' + err.email.hasDanger">
            <label for="corpusNameField" class="bmd-label-floating">メールアドレス</label>
            <input v-model="postData.email" type="text" :class="'form-control' + err.email.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="191">
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
            <label for="corpusNameField" class="bmd-label-floating">パスワード</label>
            <input v-model="postData.password" type="text" :class="'form-control' + err.password.invalid" id="corpusNameField" required="true" aria-required="true" aria-invalid="true" maxlength="255">
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
      <button @click="execAddAccount" type="button" class="btn btn-brand">登録</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

import CommonModal from '../../common/modal/Modal';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'AddAccountModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      postData: {
        sei_kanji: '',
        mei_kanji: '',
        email: '',
        password: '',
      },
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
      errors: 'multiModal/accountAddError'
    }),
  },
  created() {
    Core.log('[created]');
    this.resetErr();
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    // コーパス登録処理
    execAddAccount() {
      Core.log('[execAddAccount]');
      this.$store.dispatch('accountData/addAccount', this.postData);
    },
    // エラーリセット
    resetErr() {
      this.err = {
        sei_kanji: {
          hasDanger: '',
          invalid: '',
          message: '',
        },
        mei_kanji: {
          hasDanger: '',
          invalid: '',
          message: '',
        },
        email: {
          hasDanger: '',
          invalid: '',
          message: '',
        },
        password: {
          hasDanger: '',
          invalid: '',
          message: '',
        },
      };
    },
  },
};
</script>