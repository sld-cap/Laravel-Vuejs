<template>
  <CommonModal>
    <div slot="title">アカウントの削除</div>
    <!-- /.title -->
    <div slot="body">
      <h4>本当に削除してもよろしいですか？</h4>
      <p>実行すると当該アカウントのプロフィール情報は全て削除されます。</p>
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button @click="hideModal" type="button" class="btn btn-secondary">閉じる</button>
      <button @click="execDeleteAccount" type="button" class="btn btn-danger">削除</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Lib from '../../../../common/ext/functions';
import { mapGetters } from 'vuex';

import CommonModal from '../../common/modal/Modal';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'DeleteAccountModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      option: {},
      deleteId: null,
    };
  },
  computed: {
    ...mapGetters({
      accountList: 'accountData/accountList',
      deleteIndex: 'multiModal/deleteAccountIndex',
    }),
  },
  created() {
    Core.log('[created]');
    this.loadApiConfig('deleteAccount');
  },
  mounted() {
    Core.log('[mounted]');
    this.deleteId = this.accountList[this.deleteIndex].id;
  },
  methods: {
    loadApiConfig(configName) {
      Core.log('[method] loadApiConfig');
      const config = Lib.getApiConfig(configName);
      this.option = config;
      Core.log(this.data);
    },
    // アカウント削除
    execDeleteAccount() {
      Core.log('[execDeleteAccount]');

      this.option.url = this.option.url.replace(/{user}/g, this.deleteId);
      this.$store.dispatch('accountData/delete', { option: this.option });
    },
  },
};
</script>