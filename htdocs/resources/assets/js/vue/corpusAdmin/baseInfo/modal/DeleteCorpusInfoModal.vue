<template>
  <CommonModal>
    <div slot="title">コーパスの削除</div>
    <!-- /.title -->
    <div slot="body">
      <p>コーパスを削除すると、登録されている教師データが全て削除され、関連しているAPIも応答ができなくなります。</p>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="showConfirmAlert" type="button" class="btn btn-danger">確認</button>
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
  name: '',
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
    showConfirmAlert() {
      Core.log('[showConfirmAlert]');

      if (confirm('コーパスを削除してもよろしいですか？')) {
        const corpus_id = this.$store.getters['commonData/corpusId'];
        this.$store.dispatch('corpusData/deleteCorpus', corpus_id);
      }
    }
  },
};
</script>