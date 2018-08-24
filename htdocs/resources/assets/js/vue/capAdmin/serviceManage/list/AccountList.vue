<template>
  <div class="card">
    <div class="card-header card-header-default">
      <h4 class="card-title ">管理アカウント一覧</h4>
      <p class="card-category"> 本サイトを閲覧できるアカウントの一覧です。</p>
    </div>
    <div class="card-body">
      <!-- // IF: ローディングの時 -->
      <Loading v-if="loading" /><!-- loading -->

      <!-- // ELSE IF 0件の時 -->
      <p v-else-if="accountList.length === 0">
        登録されているアカウントがありません
      </p>

      <!-- // ELSE IF 0件以上の時 -->
      <div v-else-if="accountList.length > 0" class="table-responsive">
        <table class="table setting-table">
          <thead class="text-info">
            <tr>
              <th>氏名</th>
              <th>登録メール</th>
              <th class="btnbox"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(account, i) in accountList" :key="account.id">
              <td>{{ account.sei_kanji }} {{ account.mei_kanji }}</td>
              <td>{{ account.email }}</td>
              <td>
                <button @click="openEditAccountModal(i)" type="button" rel="tooltip" class="btn btn-success">
                  <i class="material-icons">edit</i>
                </button>
                <button v-if="me.id != account.id" @click="openDeleteAccountModal(i)" type="button" rel="tooltip" class="btn btn-danger">
                  <i class="material-icons">delete</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="openAddAccountModal" type="button" class="btn btn-info">新規登録</button>
      </div>
    </div>
  </div>
  <!-- /.card -->
</template>

<script>
import * as Core from '../../../../common/core/app';
import { mapGetters } from 'vuex';
import Loading from '../../common/loading/BasicLoading.vue';

export default {
  components: {
    Loading,
  },
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      loading: 'accountData/loading',
      accountList: 'accountData/accountList',
      me: 'commonData/me',
    }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
    // アカウント作成
    openAddAccountModal() {
      Core.log('[openAddAccountModal]');
      this.$store.dispatch('multiModal/showAddAccountModal');
    },
    // アカウント編集
    openEditAccountModal(index) {
      Core.log('[openEditAccountModal]');
      this.$store.dispatch('multiModal/showEditAccountModal', { index });
    },
    // アカウント削除
    openDeleteAccountModal(index) {
      Core.log('[openDeleteAccountModal]');
      this.$store.dispatch('multiModal/showDeleteAccountModal', { index });
    },
  },
};
</script>

<style></style>