<template>
  <div class="card bg-light mb-3">
    <div class="card-header">最新の検証結果サマリー<br>（2018/05/01 12:00:00時点）</div>
    <div class="card-body" style="padding: 0.5rem;">
      <canvas id="myBarChart" width="200" height="200"></canvas>
    </div>
  </div>
  <!-- /.card -->
</template>

<script>
import * as Core from '../../../../common/core/app';

export default {
  components: {},
  props: [],
  data() {
    return {
    };
  },
  computed: {},
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
    this.setChart();
  },
  methods: {
    setChart() {
      //棒グラフ
      var ctx = document.getElementById("myBarChart");
      var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["景表法NG", "薬機法NG", "その他NG", "景表法OK", "薬機法OK", "その他OK"],
          datasets: [
            {
              label: "適合率[%]",
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              data: [89, 90, 85, 81, 92, 90]
            },
            {
              label: "再現率[%]",
              backgroundColor: "rgba(255,127,80,0.4)",
              borderColor: "rgba(255,127,80,1)",
              data: [93, 79, 81, 80, 89, 91]
            }  
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true,
              }
            }]
          }
        }
      });
    },
  },
};
</script>

<style></style>