<template>
  <!-- <transition name="fade"> -->
    <component v-if="isShow" :is="modalName"></component>
  <!-- </transition> -->
</template>

<script>
  import { mapState } from 'vuex'
  
  // コーパス作成
  import AddCorpusModal from '../../corpusManage/modal/AddCorpusModal.vue';
  import CompAddCorpusModal from '../../corpusManage/modal/CompAddCorpusModal.vue';

  // アカウント作成
  import AddAccountModal from '../../serviceManage/modal/AddAccountModal.vue';
  import CompAddAccountModal from '../../serviceManage/modal/CompAddAccountModal.vue';
  // アカウント編集
  import EditAccountModal from '../../serviceManage/modal/EditAccountModal.vue';
  import CompEditAccountModal from '../../serviceManage/modal/CompEditAccountModal.vue';
  // アカウント削除
  import DeleteAccountModal from '../../serviceManage/modal/DeleteAccountModal.vue';
  import CompDeleteAccountModal from '../../serviceManage/modal/CompDeleteAccountModal.vue';

  export default {
    name: 'MultiModalView',
    components: {
      // コーパス作成
      AddCorpusModal, CompAddCorpusModal,
      // アカウント作成
      AddAccountModal, CompAddAccountModal,
      // アカウント編集
      EditAccountModal, CompEditAccountModal,
      // アカウント削除
      DeleteAccountModal, CompDeleteAccountModal,
    },
    computed: {
      ...mapState('multiModal', ['modalName']),
      isShow () {
        return this.modalName !== '';
      }
    }
  }
</script>