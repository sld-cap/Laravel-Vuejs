<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1>dashboard</h1>
      <ul>
        <li><a href="/corpus/data/view/1">コーパス管理画面 -データ管理-</a></li>
      </ul>
    </div>
    <!-- /.col-12 -->
  </div>
  <!-- /.row -->

  <div class="row">
    <div class="col-12">
      <h1>あなたの情報</h1>
      <ul>
        <li>ユーザ名: {{ me.name }}</li>
        <li>メールアドレス: {{ me.email }}</li>
      </ul>
    </div>
    <!-- /.col-12 -->
  </div>
  <!-- /.row -->
</div>
<!-- /.container -->
</template>


<script>
import * as Core from '../common/core/app';
import * as Api from '../common/core/apiConfig';
import * as Lib from '../common/ext/functions';

export default {
  props: ['me'],
  data() {
    return {
    };
  },
  created() {
			Core.log('[created]');
  },
  mounted() {
      Core.log('[mounted]');
  },
  methods: {
  }
};
</script>