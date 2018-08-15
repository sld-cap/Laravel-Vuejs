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
    this.setChart();
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
    setChart() {
      var ctx3 = document.getElementById("prodDataChart").getContext('2d');
      var myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
          labels: ["薬機法NG", "景表法NG", "その他NG", "薬機法OK", "景表法OK", "その他OK"],
          datasets: [{
            backgroundColor: [
              "#2ecc71",
              "#3498db",
              "#95a5a6",
              "#9b59b6",
              "#f1c40f",
              "#e74c3c"
            ],
            data: [500, 450, 300, 500, 50, 100]
          }]
        }
      });
    }
  },
}
</script>