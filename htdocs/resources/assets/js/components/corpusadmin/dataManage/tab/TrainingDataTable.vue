<template>
  <div id="trainingDataList">
    <div class="row mt-2" style="width:100%;height:30px;margin:0;">
      <div class="h6 col-3 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">クラス</div>
      <div class="h6 col-9 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">関連テキスト</div>
    </div>
    <!-- /.row -->
    <div class="row" style="width:100%;height:450px;margin:0;">
      <div class="col-3 border" style="height:470px;padding:5px;overflow-y:scroll;background-color:#F8F9FA;">
        <div class="nav flex-column nav-pills-brand" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <template v-for="(data, i) in trainingData">
            <a v-if="i === 0" class="nav-link h6 active" :key="data.class_id" :id="'v-pills-tab_' + i" data-toggle="pill" :href="'#v-pills_' + i" role="tab" :aria-controls="'v-pills_' + i" aria-selected="true">
              <span>{{ data.name }}</span>
              <span class="badge badge-pill badge-light ml-1">{{ data.training_data_count }}</span>
            </a>
            <a v-else class="nav-link h6" :key="data.class_id" :id="'v-pills-tab_' + i" data-toggle="pill" :href="'#v-pills_' + i" role="tab" :aria-controls="'v-pills_' + i" aria-selected="true">
              <span>{{ data.name }}</span>
              <span class="badge badge-pill badge-light ml-1">{{ data.training_data_count }}</span>
            </a>
          </template>
        </div>
        <!-- /.nav -->
      </div>
      <!-- /.col-3 -->
      <div class="col-9 border" style="padding:5px;height:470px;overflow-y:scroll;background-color:#F8F9FA;">
        <div class="tab-content" id="v-pills-tabContent">
          <template v-for="(data, i) in trainingData">
            <div v-if="i === 0" class="tab-pane fade show list-group active" :key="data.class_id" :id="'v-pills_' + i" role="tabpanel" :aria-labelledby="'v-pills-tab_' + i">
              <ul class="corpusTextList">
                <li v-for="(creative, j) in data.training_data" :key="creative.creative_id">
                  <a @click="setEditTrainingCreativeModal(i, j)" class="list-group-item list-group-item-action">{{ creative.content }}</a>
                </li>
              </ul>
            </div>
            <div v-else class="tab-pane fade show list-group" :key="data.class_id" :id="'v-pills_' + i" role="tabpanel" :aria-labelledby="'v-pills-tab_' + i">
              <ul class="corpusTextList">
                <li v-for="(creative, j) in data.training_data" :key="creative.creative_id">
                  <a @click="setEditTrainingCreativeModal(i, j)" class="list-group-item list-group-item-action">{{ creative.content }}</a>
                </li>
              </ul>
            </div>
          </template>
        </div>
        <!-- /.tab-content -->
      </div>
    </div>
    <!-- /.row -->

    <EditTrainingCreativeModal
      :showModal="showEditTrainingCreativeModal" 
      @close="closeModal"
      :edit-from-data="editModal">
    </EditTrainingCreativeModal>
    <!-- /.クラステキスト編集モーダル（学習データ） -->
  </div>
  <!-- /#trainingDataList -->
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';

import EditTrainingCreativeModal from '../modal/EditCreativeModal.vue';

export default {
  props: [ 'trainingData' ],
  components: {
    EditTrainingCreativeModal
  },
  data() {
    return {
      showEditTrainingCreativeModal: false,
      editModal: {},
    };
  },
  computed: {
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
    showModal() {
      Core.log('[showModal]');
    },
    closeModal() {
      this.showEditTrainingCreativeModal = false;
    },
    // 編集モーダル向け
    setEditTrainingCreativeModal(classIndex, creativeIndex) {
      Core.log(`[setEditTrainingCreativeModal] ${classIndex} / ${creativeIndex}`);
      this.resetEditCrativeModalParams();
      this.editModal.dataType = 1;
      // 対象の学習データ取得
      const classData = this.$store.getters.trainingClassData(classIndex);
      this.editModal.classId = classData.class_id;
      this.editModal.content = classData.training_data[creativeIndex].content;
      this.showEditTrainingCreativeModal = true;
    },
    resetEditCrativeModalParams() {
      Core.log('[resetEditCrativeModalParams]');
      this.editModal = {
        content: '',
        classId: '',
        dataType: '',
      };
    },
  },
}
</script>