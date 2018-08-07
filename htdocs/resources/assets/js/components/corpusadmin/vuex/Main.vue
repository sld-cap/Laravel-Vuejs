<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2">

      <!-- <div class="alert alert-danger">
        <ul>
          <li v-for="error in errors">{{ error.message }}</li>
        </ul>
      </div>
      /.alert -->

      <!-- リスト表示／更新検証 -->
      <table class="table">
        <thead>
          <tr>
            <th>コーパスID</th>
            <th>コーパス名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ corpusInfo.id }}</td>
            <td>{{ corpusInfo.name }}</td>
          </tr>
        </tbody>
      </table>
      <!-- /table -->
      <div class="row">
        <div class="col-12">
          <button type="button" @click="confirmCorpusInfo">コーパス情報確認</button>
        </div>
      </div>
    </main>
    <!-- /main -->
</template>

<script>
import * as Core from '../../../common/core/app';
import * as Api from '../../../common/core/apiConfig';
import * as Ajax from '../../../common/core/ajax';
import * as Lib from '../../../common/ext/functions';

export default {
  components: {
  },
  props: ['me'],
  data() {
    return {
      corpusId: this.$route.params.corpusId,
      storeCorpus: this.$store.state.corpusInfo
    };
  },
  computed: {
    corpusInfo() {
      return this.$store.getters.corpusInfo;
    },
    errors() {
      return this.$store.getters.errors;
    }
  },
  created() {
    Core.log('[created]');
    this.$store.commit('setCorpusId', { corpusId: this.corpusId });
    this.$store.dispatch('getCorpusInfo');

    this.$store.$on('UPDATE_CORPUSINFO', function() {
      const title = this.$store.getters.corpusInfo.name;
      Lib.setCorpusAdminTitle(title);
    });
  },
  updated() {
    Core.log('[updated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    confirmCorpusInfo() {
      Core.log('[confirmCorpusInfo]');
      Core.log(this.$store.state.corpusInfo);

      this.$store.commit('setCorpusId', { corpusId: '2' });
      this.$store.dispatch('getCorpusInfo');
    },
  }
};
</script>