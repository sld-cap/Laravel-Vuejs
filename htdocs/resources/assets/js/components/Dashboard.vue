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

</div>
<!-- /.container -->
</template>


<script>
import * as Core from '../common/core/app';
import * as Api from '../common/core/apiConfig';
import * as Lib from '../common/ext/functions';

export default {
  data() {
    return {
    };
  },
  methods: {
    logout: function() {
			Core.log('[method] logout');
	
    }
  }
};
</script>