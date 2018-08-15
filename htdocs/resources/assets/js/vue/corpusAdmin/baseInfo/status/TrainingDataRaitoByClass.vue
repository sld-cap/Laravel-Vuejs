<template>
  <div class="card bg-light mb-3">
    <div class="card-header">クラス別登録データ比率</div>
    <div class="card-body">
      <h5 class="card-title">学習データ</h5>
      <canvas id="prodDataChart" width="500" height="300"></canvas>
    </div>
  </div>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';

export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {
  },
  created() {
    Core.log('[created]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
  },
}
</script>