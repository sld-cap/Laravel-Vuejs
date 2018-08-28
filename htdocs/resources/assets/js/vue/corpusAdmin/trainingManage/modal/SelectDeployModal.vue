<template>
  <CommonModal modalSize="modal-lg">
    <div slot="title">本番反映の確認</div>
    <!-- /.title -->
    <div slot="body">
      <div class="alert alert-info">
        本番反映を行うことで、このコーパスがご利用中のAPIに紐付き、AI審査が行われるようになります。<br>
        現在APIに紐づいているコーパスは「検証用」に切り替わり、このコーパスが「本番用」として利用開始されます。<br>
        紐付けるAPIを指定して「本番用」に切り替えてください。
      </div>
      <!-- /.alert -->

      <form class="container mt-4">
        <div class="form-group">
          <label for="selectApi">紐付けるAPIを指定してください</label>
          <select class="form-control" id="selectApi" v-model="data.api_id">
            <option v-for="api in apiList" :key="api.id" :value="api.id">{{ api.name }}</option>
          </select>
        </div>
        <!-- /.form-group -->
      </form>
      <!-- form -->

    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="deploy" type="button" class="btn btn-danger">切り替え</button>
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
  name: 'SelectDeployModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      data: {},
      option: {},
      err: [],
    };
  },
  computed: {
    ...mapGetters({
      apiList: 'apiData/apiList',
    }),
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('deployCorpus');
  },
  mounted() {
    Core.log('[mounted]');
    this.setParams();
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      this.data = config.data;
      Core.log(this.data);
    },
    // 値セット
    setParams() {
      Core.log('[method] setParams');
      Core.log(this.apiList[0].id);
      this.data.api_id = this.apiList[0].id;
    },
    // 本番反映
    deploy() {
      Core.log('[method] deploy');
      this.option.data = this.data;
      const corpus_id = this.$store.getters['commonData/corpusId'];
      this.option.url = this.option.url.replace(/{corpus_id}/g, corpus_id);
      this.$store.dispatch('corpusData/deploy', { option: this.option });
      this.hideModal();
    },
  },
};
</script>

<style>
.container {
  width: 80%;
}
</style>