<template>
  <CommonModal>
    <template v-if="currentDataType === 1">
      <div slot="title">クラス／テキスト編集（学習データ）</div>
      <!-- /.title -->
      <div slot="body">
        <h5>学習データの編集が完了しました。</h5>
        <p class="mt-4" v-if="trainingDataCount >= 5" @click="hideModal"><router-link :to="{ name: 'training' }">学習管理ページ</router-link>でAI学習を実行しましょう。</p>
        <p class="mt-4" v-else>AI学習には5件以上の学習データが必要です。<br>登録を行いましょう。</p>
      </div>
      <!-- /.body -->
      <div slot="footer">
        <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
      </div>
      <!-- /.footer -->
    </template>

    <template v-if="currentDataType === 0">
      <div slot="title">クラス／テキスト編集（テストデータ）</div>
      <!-- /.title -->
      <div slot="body">
        <h5>テストデータの登録が完了しました。</h5>
        <p class="mt-4" @click="hideModal"><router-link :to="{ name: 'training' }">学習管理ページ</router-link>でテストを実行しましょう。</p>
      </div>
      <!-- /.body -->
      <div slot="footer">
        <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
      </div>
      <!-- /.footer -->
    </template>
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'CompEditTrainingDataModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      currentDataType: this.$store.getters['multiModal/currentDataType'],
    };
  },
  computed: {
    ...mapGetters({
      trainingDataCount: 'corpusTrainingData/trainingDataCount',
    }),
  },
  mounted() {
  },
  methods: {
  },
};
</script>