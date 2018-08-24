<template>
  <div class="card">
    <div class="card-header card-header-default">
      <h4 class="card-title ">ご請求一覧</h4>
      <p class="card-category">ご請求利用料金の履歴の一覧です。</p>
    </div>
    <div class="card-body">
      <div class="limit-contents">
        <table class="table setting-table">
          <thead class="text-info">
            <tr>
              <th>＃</th>
              <th>対象年月</th>
              <th>APIコール回数</th>
              <th>利用料金</th>
              <th class="btnbox"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2018年6月分</td>
              <td>23,200</td>
              <td>￥81,000</td>
              <td>
                <button @click="downloadInvoice()" type="button" rel="tooltip" class="btn btn-success">
                  <i class="material-icons">cloud_download</i> 請求書ダウンロード
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2018年5月分</td>
              <td>21,192</td>
              <td>￥73,000</td>
              <td>
                <button @click="downloadInvoice()" type="button" rel="tooltip" class="btn btn-success">
                  <i class="material-icons">cloud_download</i> 請求書ダウンロード
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2018年4月分</td>
              <td>19,000</td>
              <td>￥55,000</td>
              <td>
                <button @click="downloadInvoice()" type="button" rel="tooltip" class="btn btn-success">
                  <i class="material-icons">cloud_download</i> 請求書ダウンロード
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as Core from '../../../../common/core/app';
// import * as Ajax from '../../../../common/core/ajax';
// import { mapGetters } from 'vuex';

export default {
  components: {},
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
    downloadInvoice() {
      Core.log('[method] downloadInvoice');
      Core.log('未実装');
    },
  },
};
</script>

<style></style>