<template>
  <CommonModal>
    <div slot="title">アカウントの削除</div>
    <!-- /.title -->
    <div slot="body">
      <h4>アカウントの削除が完了しました</h4>
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
  name: 'CompDeleteAccountModal',
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