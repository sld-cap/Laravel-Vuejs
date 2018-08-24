<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-default">
              <h4 class="card-title">xxx一覧</h4>
            </div>
            <!-- /.card-header -->
            <div class="card-body" style="padding: 10px 25px;">

              <div class="row">
                <div class="col-12">
                  <div class="bd-callout bd-callout-warning">
                    <p>注意書き</p>
                  </div>
                </div>
              </div>
              <!-- /.row -->

              <XxxList /><!-- // xxx一覧コンポーネント -->
              <!-- /.row -->

            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content -->
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