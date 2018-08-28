<template>
  <CommonModal>
    <div slot="title">テキスト削除</div>
    <!-- /.title -->
    <div slot="body" v-if="currentDataType === 1">
      <template v-if="trainingDataCount >= 5">
        <h5>テキストの削除が完了しました。</h5>
        <p class="mt-4" @click="hideModal"><router-link :to="{ name: 'training' }">学習管理ページ</router-link>でAI学習を実行しましょう。</p>
      </template>
      <p v-else>テキストの削除が完了しました。</p>
    </div>
    <div slot="body" v-if="currentDataType === 0">
      <h5>テキストの削除が完了しました。</h5>
      <p class="mt-4" @click="hideModal"><router-link :to="{ name: 'training' }">学習管理ページ</router-link>でテストを実行しましょう。</p>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'CompDeleteTrainingDataModal',
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