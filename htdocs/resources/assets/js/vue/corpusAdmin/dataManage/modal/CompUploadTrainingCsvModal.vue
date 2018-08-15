<template>
  <CommonModal>
    <template v-if="currentDataType === 1">
      <div slot="title">学習データのアップロード</div>
      <!-- /.title -->
      <div slot="body">
        <p>学習データのアップロードが完了しました。学習管理で学習しましょう。</p>
      </div>
      <!-- /.body -->
      <div slot="footer">
        <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
      </div>
      <!-- /.footer -->
    </template>

    <template v-if="currentDataType === 0">
      <div slot="title">テストデータのアップロード</div>
      <!-- /.title -->
      <div slot="body">
        <p>テストデータのアップロードが完了しました。学習管理で学習しましょう。</p>
      </div>
      <!-- /.body -->
      <div slot="footer">
        <button @click="hideModal" type="button" class="btn btn-primary">閉じる</button>
      </div>
      <!-- /.footer -->
    </template>
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'CompUploadTrainingCsvModal',
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