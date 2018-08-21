<template>
  <tr class="step-list__line"><!-- 03レポート -->
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 0.55;">
        <div class="step-list__rect">
          03
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        AI学習結果のテスト<small>（任意）</small>
      </h4>
      <p class="step-list__text">
        テストデータを元にAIの回答精度を確認します。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <button v-if="corpusStatus === '4' || corpusStatus === '0'" 
        type="button" class="btn btn-outline-danger">テスト実行
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
      canTest: false,
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
  },
};
</script>

<style></style>