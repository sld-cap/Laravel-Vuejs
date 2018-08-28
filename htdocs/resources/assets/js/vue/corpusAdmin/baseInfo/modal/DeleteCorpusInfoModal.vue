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
import * as Lib from '../../../../common/ext/functions';
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
      option: {},
    };
  },
  computed: {
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('deleteCorpus');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      Core.log(this.data);
    },
    // 削除確認
    showConfirmAlert() {
      Core.log('[showConfirmAlert]');

      if (confirm('コーパスを削除してもよろしいですか？')) {
        const corpusId = this.$store.getters['commonData/corpusId'];

        this.option.url = this.option.url.replace(/{corpus}/g, corpusId);
        this.$store.dispatch('corpusData/delete', { option: this.option });
      }
    }
  },
};
</script>