<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

    <div class="panel-group mt-3">
      <XxxList /><!-- // Xxxコンポーネント -->
    </div>
    <!-- /.panel-group -->

  </main>
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Lib from '../../../common/ext/functions';

import { mapGetters, mapActions } from 'vuex';
// 各コンポーネント読み込み
import XxxList from './list/XxxList.vue';

export default {
  props: [],
  components: {
    XxxList, // 読み込んだコンポーネントを記述する
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      xxxList: 'xxxData/xxxList', // ストアから必要なデータを取得する
    }),
  },
  watch: {
    'xxxList': { // 必要に応じてwatchの設定する
      handler: function (newVal, oldVal) {
        Core.log('[watch] xxxList更新');
        // 必要な処理を記述する
      },
      deep: true
    },
  },
  created() {
    Core.log('[created]');
  },
  mounted: function() {
    Core.log('[mounted]');
  },
  updated: function() {
    Core.log('[updated]');
  },
  methods: {
    execXxx() { // 必要に応じてメソッドを追加する
      Core.log('[execXxx]');
      this.$store.dispatch('xxxData/Xxx');
    },
  },
};
</script>

<style></style>
