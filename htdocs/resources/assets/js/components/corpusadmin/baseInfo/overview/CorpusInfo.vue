<template>
  <div class="panel panel-default">
    <div class="panel-heading border-bottom mb-2">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1" style="text-decoration:none;">コーパス概要</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse show">
      <div class="table-responsive">
        <table class="table mb-0">
          <thead class="thead-light">
            <tr>
              <th scope="col" width="25%"></th>
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
              <td>{{ corpusInfo.language }}</td>
            </tr>
            <tr>
              <th scope="row">作成日</th>
              <td>{{ corpusInfo.created_at }}（***ここに作成者名を表示***）</td>
            </tr>
            <tr>
              <th scope="row">最終更新日</th>
              <td>{{ corpusInfo.updated_at }}（***ここに更新者名を表示***）</td>
            </tr>
          </tbody>
        </table>
        <div class="float-right">
          <a href="javascript:void(0);">
            <span class="text-muted" data-feather="settings" style="width:15px;height:15px;"></span>
            <span class="text-muted" @click="setEditCorpusInfoModal">編集する</span>
          </a>
        </div>
      </div>
    </div>

    <EditCorpusInfoModal
      :edit-form-data="editModal">
    </EditCorpusInfoModal>
  </div>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';
// モーダル
import EditCorpusInfoModal from '../modal/EditCorpusInfoModal.vue';

export default {
  props: [],
  components: { EditCorpusInfoModal, },
  data() {
    return {
      editModal: {},
    };
  },
  computed: {
    corpusInfo() {
      return this.$store.getters.corpusInfo;
    },
    // showEditCorpusInfoModal() {
    //   return this.$store.getters.modalState.showEditCorpusInfoModal;
    // },
  },
  created() {
    Core.log('[created]');
    this.resetEditCorpusInfoModal();
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
    setEditCorpusInfoModal() {
      Core.log('[setEditCorpusInfoModal]');
      this.resetEditCorpusInfoModal();
      this.$store.state.modal.editCorpusInfoModalFlag = true;
    },
    resetEditCorpusInfoModal() {
      this.editModal = {
        name: this.corpusInfo.name,
        description: this.corpusInfo.description,
        language: this.corpusInfo.language,
      };
    },
  },
}
</script>