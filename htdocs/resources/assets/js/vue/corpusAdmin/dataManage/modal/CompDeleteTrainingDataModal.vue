<template>
  <CommonModal>
    <div slot="title">テキスト削除</div>
    <!-- /.title -->
    <div slot="body">
      <p>テキストの削除が完了しました。</p>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'CompDeleteTrainingDataModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      currentDataType: this.$store.getters['multiModal/currentDataType'],
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>