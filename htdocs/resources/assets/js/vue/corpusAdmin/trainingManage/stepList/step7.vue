<template>
  <tr class="step-list__line"><!-- 07本番反映 -->
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 1;">
        <div class="step-list__rect">
          07
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        本番反映
      </h4>
      <p class="step-list__text">
        学習済みコーパスを本番で運用開始します。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <template v-if="isProduction === '0' && corpusStatus === '4'">
        <p class="text-danger">実行可能</p>
        <button @click="openSelectDeployModal" type="button" class="btn btn-danger">本番反映</button>
      </template>
      <template v-else>
        <button type="button" class="btn btn-secondary" disabled>実行不可</button>
      </template>
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
      canDeproy: true,
    };
  },
  computed: {
    ...mapGetters({
      corpusStatus: 'corpusData/corpusStatus',
      isProduction: 'corpusData/isProduction',
    }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    openSelectDeployModal() {
      this.$store.dispatch('multiModal/showSelectDeployModal');
    },
  },
};
</script>

<style></style>