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
      <template v-if="canTraining">
        <p class="text-danger">ここにテキストが入ります</p>
        <button @click="confirmExec" type="button" class="btn btn-danger" id="exec_corpus_training_btn">学習実行</button>
      </template>
      <template v-else>
        <p class="text-secondary">ここにテキストが入ります</p>
        <button type="button" class="btn btn-secondary" disabled>実行不可</button>
      </template>
    </td>
  </tr>
</template>

<script>
import * as Core from '../../../../common/core/app';
// import * as Ajax from '../../../../common/core/ajax';
// import ApiConfig from '../../../../common/core/apiConfig';
// import CommonModal from '../../common/modal/Modal';

// import { mapGetters } from 'vuex';
// import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  // name: 'EditTrainingDataModal',
  // mixins: [MultiModalMixin],
  components: {},
  props: [],
  data() {
    return {
      canTraining: true,
    };
  },
  computed: {
    // ...mapGetters({
    //   trainingData: 'corpusTrainingData/trainingData',
    // }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    confirmExec() {
      Core.log('[confirmExec]');
      if (confirm('学習の実行には料金が掛かります。\n本当に実行しますか？')) {
        alert('処理は未実装');
      }
    },
  },
};
</script>

<style></style>