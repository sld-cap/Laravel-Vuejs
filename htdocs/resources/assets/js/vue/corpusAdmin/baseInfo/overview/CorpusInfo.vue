<template>
  <div class="panel panel-default">
    <div class="panel-heading border-bottom mb-2">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1" style="text-decoration:none;">コーパス概要</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse show">
      <Loading v-if="loading" /><!-- loading -->
      <p v-else-if="Object.keys(corpusInfo).length === 0">該当のコーパスデータが見つかりませんでした</p><!-- // 0件 -->
      <div v-else-if="Object.keys(corpusInfo).length > 0" class="table-responsive">
        <table class="table mb-0">
          <thead class="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">コーパス名</th>
              <td>{{ corpusInfo.name }}</td>
            </tr>
            <tr>
              <th scope="row">コーパス説明</th>
              <td style="white-space: pre;" v-text="corpusInfo.description"></td>
            </tr>
            <tr>
              <th scope="row">言語</th>
              <td>{{ language_labal }}</td>
            </tr>
            <tr>
              <th scope="row">作成日</th>
              <td>{{ corpusInfo.created_at }}（{{ corpusInfo.create_user_name }}）</td>
            </tr>
            <tr>
              <th scope="row">最終更新日</th>
              <td>{{ corpusInfo.updated_at }}（{{ corpusInfo.update_user_name }}）</td>
            </tr>
          </tbody>
        </table>
        <div class="float-right">
          <a href="javascript:void(0);">
            <span class="text-muted" data-feather="settings" style="width:15px;height:15px;"></span>
            <span class="text-muted" @click="openEditCorpusInfoModal">編集する</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';

import { mapGetters } from 'vuex';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  props: [],
  components: {
    Loading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loading: 'corpusData/loading',
      corpusInfo: 'corpusData/corpusInfo',
      language_labal: 'corpusData/CorpuslanguageLabel',
    }),
  },
  created() {
    Core.log('[created]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
    openEditCorpusInfoModal() {
      Core.log('[openEditCorpusInfoModal]');
      this.$store.dispatch('multiModal/showEditCorpusInfoModal');
    },
  },
}
</script>