<template>
  <div class="card bg-light mb-3">
    <div class="card-header">現在のステータス</div>
    <div class="card-body" style="padding: 0.5rem;">
      <p>{{ corpusCurrentStatus }}</p>
    </div>
  </div>
  <!-- /.card -->
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
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