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

  // 教師データ登録
  import AddTrainingDataModal from '../../dataManage/modal/AddTrainingDataModal';
  import CompAddTrainingDataModal from '../../dataManage/modal/CompAddTrainingDataModal';
  // 教師データ編集
  import EditTrainingDataModal from '../../dataManage/modal/EditTrainingDataModal';
  import CompEditTrainingDataModal from '../../dataManage/modal/CompEditTrainingDataModal';
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
      EditCorpusInfoModal, CompEditCorpusInfoModal,
      // 学習データ
      AddTrainingDataModal, CompAddTrainingDataModal, // 学習データ登録
      EditTrainingDataModal, CompEditTrainingDataModal, // 学習データ編集
      UploadTrainingCsvModal, CompUploadTrainingCsvModal, // 学習データCSVアップロード
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