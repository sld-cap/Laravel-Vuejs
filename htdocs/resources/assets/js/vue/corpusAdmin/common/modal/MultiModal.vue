<template>
  <!-- <transition name="fade"> -->
    <component v-if="isShow" :is="modalName"></component>
  <!-- </transition> -->
</template>

<script>
  import { mapState } from 'vuex'
  
  // コーパスデータ編集
  import EditCorpusInfoModal from '../../baseInfo/modal/EditCorpusInfoModal';
  import CompEditCorpusInfoModal from '../../baseInfo/modal/CompEditCorpusInfoModal';
  // コーパスデータ削除
  import DeleteCorpusInfoModal from '../../baseInfo/modal/DeleteCorpusInfoModal.vue';

  // 教師データ登録
  import AddTrainingDataModal from '../../dataManage/modal/AddTrainingDataModal';
  import CompAddTrainingDataModal from '../../dataManage/modal/CompAddTrainingDataModal';
  // 教師データ編集
  import EditTrainingDataModal from '../../dataManage/modal/EditTrainingDataModal';
  import CompEditTrainingDataModal from '../../dataManage/modal/CompEditTrainingDataModal';
  // 教師データ削除
  import DeleteTrainingDataModal from '../../dataManage/modal/DeleteTrainingDataModal';
  import CompDeleteTrainingDataModal from '../../dataManage/modal/CompDeleteTrainingDataModal';
  // 教師データCSVアップロード
  import UploadTrainingCsvModal from '../../dataManage/modal/UploadTrainingCsvModal';
  import CompUploadTrainingCsvModal from '../../dataManage/modal/CompUploadTrainingCsvModal';

  // AI判定の閾値設定
  import EditThresholdModal from '../../trainingManage/modal/EditThresholdModal';
  // 本番反映
  import SelectDeployModal from '../../trainingManage/modal/SelectDeployModal';

  export default {
    name: 'MultiModalView',
    components: {
      // コーパスデータ
      EditCorpusInfoModal, CompEditCorpusInfoModal, DeleteCorpusInfoModal,
      // 教師データ
      AddTrainingDataModal, CompAddTrainingDataModal, // 教師データ登録
      EditTrainingDataModal, CompEditTrainingDataModal, // 教師データ編集
      DeleteTrainingDataModal, CompDeleteTrainingDataModal, // 教師データ削除
      UploadTrainingCsvModal, CompUploadTrainingCsvModal, // 教師データCSVアップロード
      // 学習管理
      EditThresholdModal, SelectDeployModal,
    },
    computed: {
      ...mapState('multiModal', ['modalName']),
      isShow () {
        return this.modalName !== '';
      }
    }
  }
</script>