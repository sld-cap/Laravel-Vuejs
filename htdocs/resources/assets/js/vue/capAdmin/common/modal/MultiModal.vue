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

  export default {
    name: 'MultiModalView',
    components: {
      // コーパス作成
      AddCorpusModal, CompAddCorpusModal,
    },
    computed: {
      ...mapState('multiModal', ['modalName']),
      isShow () {
        return this.modalName !== '';
      }
    }
  }
</script>