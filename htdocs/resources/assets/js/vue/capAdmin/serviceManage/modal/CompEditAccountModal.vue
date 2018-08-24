<template>
  <CommonModal>
    <div slot="title">アカウントの編集</div>
    <!-- /.title -->
    <div slot="body">
      <h4>アカウントの編集が完了しました</h4>
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
  name: 'CompEditAccountModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {};
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>