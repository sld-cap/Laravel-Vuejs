<template>
  <div class="card bg-light mb-3">
    <div class="card-header">教師データの件数割合評価
      <button type="button" class="btn btn-warning rounded-circle p-0 font-weight-bold text-white float-right" style="width:1.5rem;height:1.5rem;" data-toggle="modal" data-target="#aiThreadModal">?</button>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <span data-feather="alert-triangle" class="text-warning font-weight-bold"></span>
        <span class="h5 font-weight-bold"><small>良い / </small>要確認<small> / 要調整</small></span>
      </h5>
      <p class="card-text">クラスごとのデータ件数がばらついているため、学習精度が低下している可能性があります。データの編集は、<a href="/corpus/training">データ管理</a>をご確認ください。</p>
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