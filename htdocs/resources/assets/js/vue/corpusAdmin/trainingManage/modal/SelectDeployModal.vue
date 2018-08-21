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
          <select class="form-control" id="selectApi" v-model="postData.api_id">
            <option v-for="api in apiList" :key="api.id" :value="api.id">{{ api.name }}</option>
          </select>
        </div>
        <!-- /.form-group -->
      </form>
      <!-- form -->

    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="deploy" type="button" class="btn btn-danger">切り替え</button>
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
    </div>
    <!-- /.footer -->
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
  name: 'SelectDeployModal',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      postData: {
        corpus_id: this.$store.getters['commonData/corpusId'],
        api_id: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      apiList: 'apiData/apiList',
    }),
  },
  mounted() {
    Core.log('[mounted]');
    this.postData.api_id = this.apiList[0].id;
  },
  methods: {
    deploy() {
      Core.log('[deploy]');
      Core.log(this.postData);
      this.$store.dispatch('corpusData/deployCorpus', this.postData);
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