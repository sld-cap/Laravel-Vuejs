import Vue from 'vue';
import Vuex from 'vuex';
// modules
import commonData from './modules/commonData';
import corpusData from './modules/corpusData';
import corpusTrainingData from './modules/corpusTrainingData';
import multiModal from './modules/multiModal'; // モーダル管理用モジュール

Vue.use(Vuex);


/**
 * state
 */
const state = {
};

/**
 * modules
 */
const modules = {
  commonData,
  corpusData,
  corpusTrainingData,
  multiModal,
};


const store = new Vuex.Store({
  state,
  modules,
});

export default store;
