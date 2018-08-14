import Vue from 'vue';
import Vuex from 'vuex';
import ApiConfig from './apiConfig';
import * as Lib from '../ext/functions';
import * as Core from './app';
import * as Ajax from './ajax';

// use vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    me: {},
    corpusId: null,
    corpusInfo: {},
    corpusClass: [],
    trainingData: [],
    successMsg: '',
    errors: [],
    // モーダル開閉
    modal: {
      editCorpusInfoModalFlag: false,
      addTrainingCreativeModalFlag: false,
      editTrainingCreativeModalFlag: false,
      addTestCreativeModalFlag: false,
      editTestCreativeModalFlag: false,
      uploadTrainingDataCsvModalFlag: false,
      uploadTestDataCsvModalFlag: false,
      
    },
  },
  mutations: {
    setMe(state, payload) {
      Core.log('[store] setMe');
      state.me = payload;
      Core.log(state.me);
    },
    setCorpusId(state, payload) {
      Core.log('[store] setCorpusId');
      state.corpusId = payload.corpusId;
      Core.log(state.corpusId);
    },
    setCorpusInfoAtDataManage(state, payload) {
      Core.log('[store] setCorpusInfoAtDataManage');
      if (payload.code === 200) {
        state.corpusInfo = payload.data;
        // state.corpusInfo.status = 1;
        Core.log(state.corpusInfo);
        Lib.setCorpusAdminTitle(state.corpusInfo.name);
      } else {
        location.href = '/corpus';
      }
    },
    checkSaveCorpusInfo(state, payload) {
      Core.log('[store] checkSaveCorpusInfo');
      if (payload.code === 200) {
        state.successMsg = 'コーパス情報の更新が完了しました';
      } else {
        state.errors = payload.errors;
      }
      state.modal.editCorpusInfoModalFlag = false;
      Lib.setScrollTop();
    },
    setTrainingData(state, payload) {
      Core.log('[store] setTrainingData');
      if (payload.code === 200) {
        state.trainingData = payload.data;
      } else {
        state.errors = payload.errors;
      }
      Core.log(payload);
    },
    checkSaveCreative(state, payload) {
      Core.log('[store] checkSaveCreative');
      if (payload.code === 200) {
        state.successMsg = 'テキストの更新処理が完了しました';
      } else {
        state.errors = payload.errors;
      }
      state.modal.editCorpusInfoModalFlag = false;
      Lib.setScrollTop();
    },
    setAddCreativeResult(state, payload) {
      Core.log('[store] setAddCreativeResult');
      if (payload.code === 200) {
        state.modal.editCorpusInfo.successMsg = 'テキストの登録処理が完了しました';
      } else {
        state.errors = payload.errors;
      }
      Core.log(payload);
    },
    setError(state, payload) {
      Core.log('[store] setError');
      state.errors = payload;
      Core.log(state.error);
    },
    // test
    testMutation(state) {
      Core.log('[store] testMutation');
      this.$emit('testEmit');
    },
  },
  getters: {
    me: (state) => {
      return state.me;
    },
    corpusInfo: (state) => {
      return state.corpusInfo;
    },
    trainingData: (state) => {
      return state.trainingData;
    },
    trainingClassData: (state) => (classIndex) => {
      return state.trainingData[classIndex];
    },
    testDataCount: (state) => {
      let sum = 0;
      state.trainingData.filter((classData) => {
        sum = sum + classData.test_data_count;
      });
      return sum;
    },
    successMsg: (state) => {
      return state.successMsg;
    },
    errors: (state) => {
      return state.errors;
    },
    modalState: (state) => {
      return {
        showEditCorpusInfoModal: state.modal.editCorpusInfoModalFlag,
        showAddTrainingCreativeModal: state.modal.addTrainingCreativeModalFlag,
        showEditTrainingCreativeModal: state.modal.editTrainingCreativeModalFlag,
        showAddTestCreativeModal: state.modal.addTestCreativeModalFlag,
        showEditTestCreativeModal: state.modal.editTestCreativeModalFlag,
        showUploadTrainingDataCsvModal: state.modal.uploadTrainingDataCsvModalFlag,
        showUploadTestDataCsvModal: state.modal.uploadTestDataCsvModalFlag,
      };
    },
  },
  actions: {
    // 取得系
    getCorpusInfoAtDataManage({ commit }) {
      Core.log('[store] getCorpusInfoAtDataManage');

      const apiOption = Object.assign({}, ApiConfig['getCorpus']);
      apiOption.url = apiOption.url.replace(/{corpusId}/g, this.state.corpusId);

      Ajax.exec(apiOption, commit, 'setCorpusInfoAtDataManage');
    },
    getTrainingData({ commit }) {
      Core.log('[store] getCorpusInfoAtDataManage');

      const apiOption = Object.assign({}, ApiConfig['getTrainingData']);
      apiOption.url = apiOption.url.replace(/{training_datum}/g, this.state.corpusId);

      Ajax.exec(apiOption, commit, 'setTrainingData');
    },
    // 登録系
    addCreative({ commit, state }, { classId, content, dataType, newClassName }) {
      Core.log('[store] addCreative');
      const apiOption = Object.assign({}, ApiConfig['addTrainingData']);
      apiOption.data = {
        corpus_id: state.corpusId,
        class_id: classId,
        content: content,
        data_type: dataType,
        new_class_name: newClassName,
      };

      Ajax.exec(apiOption, commit, 'setAddCreativeResult');
    },
    // 更新系
    saveCorpusInfo({ commit, state }, { name, description, language }) {
      Core.log('[store] saveCorpusInfo');
      const apiOption = Object.assign({}, ApiConfig['setCorpusInfo']);
      apiOption.data = {
        corpus_id: state.corpusId,
        name: name,
        description: description,
        language: language,
      };

      Ajax.exec(apiOption, commit, 'checkSaveCorpusInfo');
    },
    saveCreative({ commit, state }, { classId, creativeId, content, dataType }) {
      Core.log('[store] addCreative');
      const apiOption = Object.assign({}, ApiConfig['setTrainingData']);
      apiOption.data = {
        corpus_id: state.corpusId,
        class_id: classId,
        creative_id: creativeId,
        content: content,
        data_type: dataType,
      };

      Ajax.exec(apiOption, commit, 'checkSaveCreative');
    },
    // tet
    test({ commit }) {
      Core.log('[store] addCreative');
      commit('testMutation');
    },
  },
});

export default store;
