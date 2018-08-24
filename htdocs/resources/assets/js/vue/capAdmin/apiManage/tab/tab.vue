<template>
  <div class="card mt-0">
    <div v-if="loading" class="card-body">
      <Loading />
    </div>

    <div v-else-if="Object.keys(displayApiTab).length === 0" class="card-body">
      <p>利用中のAPIはありません</p>
    </div>

    <div v-else-if="Object.keys(displayApiTab).length > 0" class="card-body">
      <p class="blockquote-footer mb-0">{{ displayApiTab.display_api_id }}</p>
      <h5 class="text-brand mt-0">{{ displayApiTab.name }}</h5>
      <ul class="nav nav-pills nav-pills-icons nav-pills-info nav-border" role="tablist">
        <li class="nav-item">
          <a class="nav-link active show" href="#api-resex" role="tab" data-toggle="tab">
            API利用例
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#api-auth" role="tab" data-toggle="tab">
            資格情報
          </a>
        </li>
      </ul>
      <div class="tab-content tab-space">
        <template>
          <div class="tab-pane active" id="api-resex">
            <Example /><!-- // タブコンテンツ: API利用例 -->
          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane" id="api-auth">
            <Credential /><!-- // タブコンテンツ: 資格情報 -->
          </div>
          <!-- /.tab-pane -->
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';

import Example from './Example.vue';
import Credential from './Credential.vue';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  components: {
    Example, Credential, Loading,
  },
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      loading: 'apiData/loading',
      apiList: 'apiData/apiList',
      checkedIndex: 'apiData/checkedIndex',
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