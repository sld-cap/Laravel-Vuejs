<template>
  <div class="card bg-light mb-3">
    <div class="card-header">現在のステータス</div>
    <div class="card-body" style="padding: 0.5rem;">
      <Loading v-if="loading" /><!-- loading -->
      <p v-else>{{ corpusCurrentStatus }}</p>
    </div>
  </div>
  <!-- /.card -->
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

import Loading from '../../common/loading/BasicLoading.vue';

export default {
  components: {
    Loading, 
  },
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loading: 'corpusData/loading',
      corpusCurrentStatus: 'corpusData/corpusCurrentStatus',
    }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>

<style></style>