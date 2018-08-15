<template>
  <div class="card bg-light mb-3">
    <div class="card-header">現在のステータス</div>
    <div class="card-body" style="padding: 0.5rem;">
      <p>{{ currentCorpusStatus }}</p>
    </div>
  </div>
  <!-- /.card -->
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
      currentCorpusStatus: 'あとで動的に表示させます',
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