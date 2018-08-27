<template>
  <div class="card bg-light mb-3">
    <div class="card-header">学習進捗
      <button type="button" class="btn btn-warning rounded-circle p-0 font-weight-bold text-white float-right" style="width:1.5rem;height:1.5rem;" data-toggle="modal" data-target="#hontekiModal">?</button>
      <div class="modal fade" id="hontekiModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">「本番適用」とは</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              入力された学習データをもとにコーパスが本番環境に適用され、AI判定結果をAPIサービスとして提供できる状態かどうかを表しています。<br>
              「適用済み」の場合は、生成されたコーパスが本番適用されて、サービス提供可能な状態です。<br>
              「検証中」の場合は、コーパスは作成されているがまだ本番適用されていない状態で、サービス提供できない状態です。<br>
              「未適用」の場合は、コーパスが作成されておらず、サービス提供できない状態です。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <span data-feather="circle" class="text-danger font-weight-bold"></span>
        <span class="h5 font-weight-bold">完了 <small>/ 学習中 / 未学習</small></span>
      </h5>
      <p class="card-text">現在、ご利用可能な状態です。<br>ご利用方法は、<a href="/corpus/api-reference/1">API接続情報</a>をご確認ください。</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';

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