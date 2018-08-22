<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-12 col-lg-6">
          <AccountList /><!-- // アカウント一覧 -->
        </div>
        <!-- /.col -->

        <div class="col-md-12 col-lg-6">
          <ApiCallLimitConfig /><!-- // APIコール上限設定 -->
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-12">
          <LogList /><!-- // 利用ログ一覧 -->
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-12">
          <FeeList /><!-- // 利用ログ一覧 -->
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content -->
</template>

<script>
import * as Core from '../../../common/core/app';
// コンポーネント
import AccountList from './list/AccountList.vue';
import ApiCallLimitConfig from './config/ApiCallLimitConfig.vue';
import LogList from './list/LogList.vue';
import FeeList from './list/FeeList.vue';

export default {
  components: {
    AccountList, ApiCallLimitConfig, LogList, FeeList,
  },
  props: [],
  data() {
    return {
    };
  },
  computed: {
    // ...mapGetters({
    // }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>

<style>
.setting-table .btnbox {
  width: 20%;
}
.setting-table button {
  padding: 5px;
}

.warning-notify {
  margin-bottom: 0; 
  line-height: 1.5;
}
</style>