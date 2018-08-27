<template>
  <CommonModal>
    <div slot="title">コーパスの編集</div>
    <!-- /.title -->
    <div slot="body">
      <p>コーパスの編集が完了しました。</p>
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
  name: 'CompEditCorpusInfoModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
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