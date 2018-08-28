<template>
  <tr class="step-list__line"><!-- 02学習実行 -->
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 0.45;">
        <div class="step-list__rect">
          02
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        AI学習の実行
      </h4>
      <p class="step-list__text">
        学習データを元にAI学習を行います。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <template v-if="corpusStatus === '2'">
        <p class="text-danger">{{ btnMsg }}</p>
        <button @click="confirmExec" type="button" class="btn btn-danger">学習実行</button>
      </template>
      <!-- // 実行可能 -->
      <template v-else>
        <p class="text-secondary">{{ btnMsg }}</p>
        <button type="button" class="btn btn-secondary" disabled>実行不可</button>
      </template>
      <!-- // 実行不可 -->
    </td>
  </tr>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import { mapGetters } from 'vuex';

export default {
  components: {},
  props: [],
  data() {
    return {
      option: {},
    };
  },
  computed: {
    ...mapGetters({
      corpusStatus: 'corpusData/corpusStatus',
      btnMsg: 'corpusData/corpusAiTrainingBtnMsg',
    }),
  },
  created() {
    Core.log('[crated]');
    this.loadApiConfig('trainingCorpus');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
    },
    // 実行確認
    confirmExec() {
      Core.log('[confirmExec]');
      if (confirm('学習の実行には料金が掛かります。\n本当に実行しますか？')) {
        Core.log(this.option);
        const corpus_id = this.$store.getters['commonData/corpusId'];
        this.option.url = this.option.url.replace(/{corpus_id}/g, corpus_id);
        this.$store.dispatch('corpusData/training', { option: this.option });
      }
    },
  },
};
</script>

<style></style>