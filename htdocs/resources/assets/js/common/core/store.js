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
    corpusId: '',
    corpusInfo: {},
    corpusClass: [],
    trainingData: [{
      
    }],
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
      if (payload.code === '200') {
        state.corpusInfo = payload.data;
        Core.log(state.corpusInfo);
        Lib.setCorpusAdminTitle(state.corpusInfo.name);
      } else {
        location.href = '/corpus';
      }
    },
    setTrainingData(state, payload) {
      Core.log('[store] setTrainingData');
      state.trainingData = payload;
      Core.log(payload);
    },
    setError(state, payload) {
      Core.log('[store] setError');
      state.errors = payload;
      Core.log(state.error);
    },
  },
  getters: {
    me(state) {
      return state.me;
    },
    corpusInfo(state) {
      return state.corpusInfo;
    },
    trainingData(state) {
      return state.trainingData;
    },
    error(state) {
      return state.errors;
    },
  },
  actions: {
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
  },
});

export default store;
