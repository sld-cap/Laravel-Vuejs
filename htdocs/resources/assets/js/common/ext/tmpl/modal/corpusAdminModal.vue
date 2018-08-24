<template>
  <CommonModal>
    <div slot="title">モーダルタイトル</div>
    <!-- /.title -->
    <div slot="body">
      <p>モーダルの本文</p>
      <!-- /message -->
      <div class="form-group">
        <label for="field_1">フィールド1</label>
        <input v-model=" postData.field_1" type="text" :class="'form-control' + err.field_1.invalid" id="field_1" 
          aria-describedby="nameHelp" maxlength="255">
        <small id="nameHelp" class="form-text text-muted">ここに補足テキストを記述できます</small>
        <div class="invalid-feedback">
          {{ err.field_1.message }}
        </div>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <!-- アクションボタン -->
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="execXxx" type="button" class="btn btn-primary">作成する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
// コンポーネント読み込み
import CommonModal from '../../common/modal/Modal'; // モーダルの大枠のコンポーネント
// その他
import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin'; // 共通メソッド（モーダル共通）
import SetErrDataMixin from '../../common/form/mixins/SetErrData'; // 共通メソッド（フォームコンテンツのエラーデータをセットする）

export default {
  name: 'YourModalName', // モーダル名
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal }, // 他に読み込んだコンポーネントがあればセットする
  props: [],
  data() {
    return {
      postData: { // フォーム系のモーダルの時、各フィールドのデータはpostDataに格納すること
        field_1: '',
      },
      err: [], // フォームのエラーを格納するプロパティ
    };
  },
  watch: {
    'errors': {
      handler: function (errors) {
        Core.log('[watch] modal error更新');
        // エラー表示処理
        this.resetErr();
        this.setErrData(errors);
      },
      deep: true
    },
  },
  computed: {
    ...mapGetters({
      errors: 'multiModal/xxxAddError' // モーダルストアモジュールに格納したエラーを取得する
    }),
  },
  created() {
    Core.log('[created]');
    this.resetErr(); // モーダル画面インスタンス生成時にエラープロパティを初期化する
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    // アクションボタンを押下した時の処理
    execXxx() { // APIで非同期処理を行う場合、dispatchで対象のAPIを叩く
      Core.log('[execXxx]');
      this.$store.dispatch('xxxData/Add', this.postData);
    },
    // エラーリセット
    resetErr() {
      this.err = {
        field_1: {
          invalid: '', // field_1の入力欄にエラークラスを付与するためのプロパティ
          message: '', // APIから返ってきたエラーメッセージを格納するためのプロパティ
        },
        // 必要なフィールド分記述すること
      };
    },
  },
}
</script>

<style></style>