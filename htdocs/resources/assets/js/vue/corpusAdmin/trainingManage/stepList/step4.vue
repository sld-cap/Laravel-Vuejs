<template>
  <tr class="step-list__line"><!-- 04テスト実行 -->
    <td class="step-list__cell">
      <div class="step-list__down step-list__down--blue" style="opacity: 0.65;">
        <div class="step-list__rect">
          04
        </div>
        <div class="step-list__tri"></div>
      </div>
    </td>
    <td class="step-list__cell">
      <h4 class="step-list__heading">
        AI回答の個別検証<small>（任意）</small>
      </h4>
      <p class="step-list__text">
        検証したいテキストを個別に入力し、回答内容を確認します。
      </p>
    </td>
    <td class="step-list__cell">
      <span class="text-muted" data-feather="chevrons-right" style=""></span>
    </td>
    <td class="step-list__cell">
      <template v-if="canUnitTest">
        <!-- <p class="text-danger">（未実装）</p> -->
        <button type="button" class="btn btn-outline-danger">検証実行</button>
      </template>
      <template v-else>
        <!-- <p class="text-secondary">（未実装）</p> -->
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
      canUnitTest: false,
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
  },
};
</script>

<style></style>