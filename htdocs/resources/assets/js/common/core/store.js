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
    setTrainingData(state, payload) {
      Core.log('[store] setTrainingData');
      if (payload.code === 200) {
        state.trainingData = payload.data;
      } else {
        state.errors = payload.errors;
      }
      Core.log(payload);
    },
    setAddCreativeResult(state, payload) {
      Core.log('[store] setAddCreativeResult');
      if (payload.code === 200) {
        state.successMsg = 'テキストの登録処理が完了しました';
      } else {
        // state.errors = payload.errors;
      }
      Core.log(payload);
    },
    setError(state, payload) {
      Core.log('[store] setError');
      state.errors = payload;
      Core.log(state.error);
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
  },
});

export default store;
