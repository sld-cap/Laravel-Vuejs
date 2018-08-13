<template>
  <div class="card bg-light mb-3">
    <div class="card-header">クラス別閾値</div>
    <div class="card-body">
      <p>登録されている各クラスの判定閾値を表示しています。APIレスポンスでトップクラスの確信度がこの値を下回る場合、その判定は無効になります。</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">クラス名</th>
            <th scope="col">データ件数</th>
            <th scope="col">閾値</th>
            <th class="btnbox"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>薬機法NG</td>
            <td>500</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>景表法NG</td>
            <td>450</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>その他NG</td>
            <td>300</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>薬機法OK</td>
            <td>500</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>景表法OK</td>
            <td>50</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>その他OK</td>
            <td>100</td>
            <td>0.8</td>
            <td>
              <button type="button" class="btn btn-secondary">
                <span data-feather="edit-2" class="font-weight-bold"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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