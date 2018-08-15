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
      <p class="text-danger">（未実装）</p>
      <button @click="openEditThresholdModal" type="button" class="btn btn-outline-danger">閾値設定</button>
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
    openEditThresholdModal() {
      this.$store.dispatch('multiModal/showEditThresholdModal');
    },
  },
};
</script>

<style></style>