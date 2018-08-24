<template>
  <div class="content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-12">
          <ApiList /><!-- // 利用中のAPI一覧 -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-12">
          <Tab /><!-- // タブコンテンツ -->
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /.content -->
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Lib from '../../../common/ext/functions';

import ApiList from './list/ApiList.vue';
import Tab from './tab/tab.vue';

export default {
  props: [],
  components: {
    ApiList, Tab,
  },
  data() {
    return {};
  },
  computed: {
  },
  created() {
    Core.log('[created]');
  },
  updated: function() {
    Core.log('[updated]');
  },
  mounted: function() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>