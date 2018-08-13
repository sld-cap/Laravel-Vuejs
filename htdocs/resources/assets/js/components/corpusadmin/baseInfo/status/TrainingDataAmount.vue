<template>
  <div class="card bg-light mb-3">
    <div class="card-header">教師データ量
      <button type="button" class="btn btn-warning rounded-circle p-0 font-weight-bold text-white float-right" style="width:1.5rem;height:1.5rem;" data-toggle="modal" data-target="#trDataModal">?</button>
      <div class="modal fade" id="trDataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">「学習データ」とは</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              AIの判定結果を向上させるためにユーザによって登録されたデータセットのことです。<br>
              学習データはコンマ区切り値 (CSV) フォーマット、もしくはコーパスのデータ管理画面から手動作成することができます。<br>
              適切なAI分析結果を得るためには、充分な学習データが必要になります。詳細はデータ管理画面をご参照ください。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title font-weight-bold">
        <span data-feather="circle" class="text-danger font-weight-bold"></span>
        <span class="h5 font-weight-bold">3200<small> 件</small></span>
      </h5>
      <p class="card-text">充分な量の学習データが登録されています。データの編集は<a href="/corpus/training/view/1">データ管理</a>で行ってください。</p>
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