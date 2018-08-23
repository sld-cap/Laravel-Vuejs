<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

    <div class="panel-group mt-3">
      <CorpusInfo /><!-- // コーパス概要 -->
    </div>
    <!-- /.panel-group -->

    <div class="panel-group mt-4">
      <OperatingStatus /><!-- // 稼働状況 -->
    </div>
    <!-- /.panel-group -->

    <div class="row mb-4">
      <div class="col-12 text-right">
        <a @click="openDeleteCorpusInfoModal" href="javascript:void(0);">コーパスの削除はこちら</a>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

  </main>
</template>

<style>
  .table-striped button {
    padding: 3px;
  }
  .btnbox {
    width: 10%
  }
  .feather {
    width: 20px;
    height: 20px;
  }
  .table-striped th {
    text-align: center;
  }
  .table-striped td {
    padding: .35rem;
    vertical-align: middle;
    text-align: center;
  }
</style>

<script>
import * as Core from '../../../common/core/app';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';
import ApiConfig from '../../../common/core/apiConfig';

import CorpusInfo from './overview/CorpusInfo.vue';
import OperatingStatus from './status/OperatingStatus.vue';

export default {
  props: ['me'],
  components: {
    CorpusInfo, OperatingStatus, 
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
    feather.replace();
  },
  methods: {
    openDeleteCorpusInfoModal() {
      Core.log('[openDeleteCorpusInfoModal]');
      this.$store.dispatch('multiModal/showDeleteCorpusInfoModal');
    },
  },
};
</script>

