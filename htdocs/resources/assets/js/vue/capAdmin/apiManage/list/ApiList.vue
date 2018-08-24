<template>
  <div class="card">
    <div class="card-header card-header-default">
      <h4 class="card-title">利用中のAPI一覧</h4>
      <p class="card-category">現在契約しているAPIの一覧です。追加のご要望はサイト運営までご連絡ください。</p>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="table-responsive">
        <Loading v-if="loading" /><!-- loading -->
        <p v-else-if="apiList.length === 0">利用中のAPIはありあせん</p>
        <table v-else-if="apiList.length > 0" class="table active-api-table">
          <thead class="text-brand">
            <tr>
              <th></th>
              <th>API-ID</th>
              <th>API名</th>
              <th>利用コーパス名</th>
              <th>利用可否</th>
              <th>ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(api, i) in apiList" :key="api.id">
              <td><label><input v-model="displayCheck" type="radio" :value="i"> 表示</label></td>
              <td>{{ api.display_api_id }}</td>
              <td>{{ api.name }}</td>
              <td>{{ api.corpus_name }}</td>
              <td>{{ api.status_availability }}</td>
              <td>{{ api.status_description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</template>

<script>
import * as Core from '../../../../common/core/app';
// import * as Ajax from '../../../../common/core/ajax';

import { mapGetters } from 'vuex';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  components: {
    Loading, 
  },
  props: [],
  data() {
    return {
      displayCheck: 0,
    };
  },
  watch: {
    'displayCheck': function (newIndex, oldIndex) {
      Core.log('[watch] displayCheck');
      this.$store.commit('apiData/setCheckedIndex', newIndex);
    },
  },
  computed: {
    ...mapGetters({
      loading: 'apiData/loading',
      apiList: 'apiData/apiList',
    }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>

<style></style>