<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h1>dashboard</h1>
      <button @click="logout">ログアウト</button>
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