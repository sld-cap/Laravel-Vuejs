<template>
  <tr class="step-list__line">
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 0.35;">
        <div class="step-list__rect">
          01
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        教師データの登録
      </h4>
      <p class="step-list__text">
        学習/テストデータをシステム登録します。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <router-link tag="button" :to="{ name: 'data-view' }" class="btn btn-link">データ管理画面へ</router-link>
    </td>
  </tr>
</template>

<script>
import * as Core from '../../../../common/core/app';

export default {
  components: {},
  props: [],
  data() {
    return {
    };
  },
  computed: {},
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