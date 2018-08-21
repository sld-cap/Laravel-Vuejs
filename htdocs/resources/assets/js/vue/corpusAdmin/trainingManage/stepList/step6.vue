<template>
  <tr class="step-list__line"><!-- 06閾値設定 -->
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 0.85;">
        <div class="step-list__rect">
          06
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        AI判定の閾値設定<small>（任意）</small>
      </h4>
      <p class="step-list__text">
        AI判定の基準となる確信度の閾値を設定します。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <button v-if="corpusStatus === '4' || corpusStatus === '0'" 
        type="button" class="btn btn-outline-danger">閾値設定
      </button>
      <button v-else 
        type="button" class="btn btn-secondary" disabled>実行不可
      </button>
    </td>
  </tr>
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

export default {
  components: {},
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      corpusStatus: 'corpusData/corpusStatus',
    }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    openEditThresholdModal() {
      this.$store.dispatch('multiModal/showEditThresholdModal');
    },
  },
};
</script>

<style></style>