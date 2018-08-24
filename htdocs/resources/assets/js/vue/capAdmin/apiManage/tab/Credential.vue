<template>
  <div class="table-responsive">
    <table class="table api-auth-table">
      <thead>
        <tr>
          <th>URI</th>
          <th>認証トークン</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ displayApiTab.api_url }}</td>
          <td>{{ displayApiTab.token }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

export default {
  components: {},
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      checkedIndex: 'apiData/checkedIndex',
      apiList: 'apiData/apiList',
    }),
    displayApiTab() {
      return this.apiList[this.checkedIndex];
    },
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