<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">
    <p>学習管理</p>
  </main>
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';
import ApiConfig from '../../../common/core/apiConfig';

export default {
  props: ['me', 'corpusId'],
  components: {
  },
  data() {
    return {};
  },
  computed: {
  },
  created() {
    Core.log('[created]');
    this.$store.state.successMsg = '';
    this.$store.state.errors = [];
  },
  updated: function() {
    Core.log('[updated]');
  },
  mounted: function() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>

