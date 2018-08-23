<template>
  <div class="table-responsive">
    <table class="table api-auth-table">
      <thead>
        <th>URI</th>
        <th>認証トークン</th>
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
      displayApiTab: 'apiData/displayApiTab',
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