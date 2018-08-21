<template>
  <CommonModal>
    <div slot="title">コーパスの作成</div>
    <!-- /.title -->
    <div slot="body">
      <h4>コーパスの作成が完了しました</h4>
      <p><small>コーパス管理画面にアクセスして、教師データの登録を行いましょう</small></p>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import CommonModal from '../../common/modal/Modal';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: 'CompAddCorpusModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {};
  },
  computed: {
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>