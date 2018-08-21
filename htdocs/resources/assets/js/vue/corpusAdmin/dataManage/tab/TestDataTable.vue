<template>
  <div id="testDataList">
    <div class="row mt-2" v-if="testDataCount === 0">
      <div class="col-12">
        <NoTestDataAlert></NoTestDataAlert>
      </div>
      <!-- /.col-12 -->
    </div>
    <!-- /.row -->

    <div v-if="testDataCount > 0" class="row mt-2" style="width:100%;height:30px;margin:0;">
      <div class="h6 col-3 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">クラス</div>
      <div class="h6 col-9 border" style="margin-bottom:0;padding:5px;background-color:#E9ECEF;">関連テキスト</div>
    </div>
    <!--  -->
    <div v-if="testDataCount > 0" class="row" style="width:100%;height:450px;margin:0;">
      <div class="col-3 border" style="height:470px;padding:5px;overflow-y:scroll;background-color:#F8F9FA;">
        <Loading v-if="loading" /><!-- loading -->

        <div class="nav flex-column nav-pills-brand" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <template v-for="(classData, i) in trainingData">
            <a v-if="i === 0" class="nav-link test h6 active" :key="classData.class_id" :id="'v-pills-tab_1_' + i" data-toggle="pill" :href="'#v-pills_1_' + i" role="tab" :aria-controls="'v-pills_1_' + i" aria-selected="true">
              <span>{{ classData.name }}</span>
              <span class="badge badge-pill badge-light ml-1">{{ classData.test_data_count }}</span>
            </a>
            <a v-else class="nav-link test h6" :key="classData.class_id" :id="'v-pills-tab_1_' + i" data-toggle="pill" :href="'#v-pills_1_' + i" role="tab" :aria-controls="'v-pills_1_' + i" aria-selected="true">
              <span>{{ classData.name }}</span>
              <span class="badge badge-pill badge-light ml-1">{{ classData.test_data_count }}</span>
            </a>
          </template>
        </div>
      </div>
      <!-- /.col -->
      <div class="col-9 border" style="padding:5px;height:470px;overflow-y:scroll;background-color:#F8F9FA;">
        <div class="tab-content" id="v-pills-tabContent">
          <Loading v-if="loading" /><!-- loading -->
          
          <template v-for="(classData, i) in trainingData">
            <div v-if="i === 0" class="tab-pane fade show list-group active" :key="classData.class_id" :id="'v-pills_1_' + i" role="tabpanel" :aria-labelledby="'v-pills-tab_1_' + i">
              <NoTestDataAlert v-if="classData.test_data_count == '0'"/>
              <ul class="corpusTextList">
                <li v-for="(creative, j) in classData.test_data" :key="creative.creative_id">
                  <a @click="showEditTrainingDataModal(0, i, j)" class="list-group-item list-group-item-action">{{ creative.content }}</a>
                </li>
              </ul>
            </div>
            <div v-else class="tab-pane fade show list-group" :key="classData.class_id" :id="'v-pills_1_' + i" role="tabpanel" :aria-labelledby="'v-pills-tab_1_' + i">
              <NoTestDataAlert v-if="classData.test_data_count == '0'"/>
              <ul class="corpusTextList">
                <li v-for="(creative, j) in classData.test_data" :key="creative.creative_id">
                  <a @click="showEditTrainingDataModal(0, i, j)" class="list-group-item list-group-item-action">{{ creative.content }}</a>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

  </div>
  <!-- /#testDataList -->
</template>

<style></style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import { mapGetters } from 'vuex';

import Loading from '../../common/loading/BasicLoading.vue';
// アラート
import NoTestDataAlert from '../alert/NoTestDataAlert.vue';

export default {
  props: [],
  components: {
    Loading, NoTestDataAlert,
  },
  data() {
    return {
      editModal: {},
    };
  },
  computed: {
    ...mapGetters({
      loading: 'corpusTrainingData/loading',
      trainingData: 'corpusTrainingData/trainingData',
      testDataCount: 'corpusTrainingData/testDataCount',
    }),
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
    showEditTrainingDataModal(dataType, classIndex, creativeIndex) {
      const class_id = this.trainingData[classIndex].class_id;
      const creative_id = this.trainingData[classIndex].test_data[creativeIndex].creative_id;
      const content = this.trainingData[classIndex].test_data[creativeIndex].content;
      
      this.$store.dispatch('multiModal/showEditTrainingDataModal', {class_id, creative_id, content, dataType});
    },
  },
}
</script>