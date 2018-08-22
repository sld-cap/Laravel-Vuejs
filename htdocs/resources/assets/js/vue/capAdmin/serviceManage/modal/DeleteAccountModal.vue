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
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';
import SetErrDataMixin from '../../common/form/mixins/SetErrData';

export default {
  name: 'DeleteAccountModal',
  mixins: [MultiModalMixin, SetErrDataMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
      postData: {
        id: '',
      },
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
  },
  mounted() {
    Core.log('[mounted]');
    Core.log(this.accountList);
    Core.log(this.deleteIndex);
    this.postData.id = this.accountList[this.deleteIndex].id;
  },
  methods: {
    // コーパス登録処理
    execDeleteAccount() {
      Core.log('[execDeleteAccount]');
      this.$store.dispatch('accountData/deleteAccount', this.postData);
    },
  },
};
</script>