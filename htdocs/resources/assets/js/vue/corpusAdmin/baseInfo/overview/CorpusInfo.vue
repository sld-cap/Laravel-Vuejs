<template>
  <div class="panel panel-default">
    <div class="panel-heading border-bottom mb-2">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1" style="text-decoration:none;">コーパス概要</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse show">
      <Loading v-if="Object.keys(corpusInfo).length === 0" /><!-- loading -->
      <div v-if="Object.keys(corpusInfo).length > 0" class="table-responsive">
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
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';

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
    corpusInfo() {
      return this.$store.getters['corpusData/corpusInfo'];
    },
    language_labal() {
      return this.$store.getters['corpusData/CorpuslanguageLabel'];
    },
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