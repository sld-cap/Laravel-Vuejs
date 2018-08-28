import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';

/**
 * state
 */
const state = {
  me: {},
  loginError: false,
  loading: false,
  corpusId: null,
  successMsg: '',
  errors: [],
};


/**
 * getters
 */
const getters = {
  me: () => {
    return state.me;
  },
  // コーパスID
  corpusId: () => {
    return state.corpusId;
  },
  // メッセージ系
  successMsg: () => {
    return state.successMsg;
  },
  errors: () => {
    return state.errors;
  },
  loading: () => {
    return state.loading;
  },
  loginError: () => {
    return state.loginError;
  },
};


/**
 * mutations
 */
const mutations = {
  // ログイン処理
  LOGIN(state, payload) {
    Core.log('[mutation] commonData/LOGIN');
    Lib.setToken(payload.token);
    Lib.login();
  },
  // ログイン失敗処理
  LOGIN_ERROR(state) {
    Core.log('[mutation] commonData/LOGIN_ERROR');
    state.loading = false;
    state.loginError = true;
  },
  // ログインユーザ情報セット
  SET_ME(state, payload) {
    Core.log('[mutation] commonData/SET_ME');
    state.me = payload;
    Core.log(state.me);
  },
  // 今のコーパスIDをセット
  SET_CORPUS_ID(state, payload) {
    Core.log('[mutation] commonData/SET_CORPUS_ID');
    state.corpusId = payload.corpusId;
    Core.log(state.corpusId);
  },
  // 画面エラーセット
  SET_ERROR(state, payload) {
    Core.log('[mutation] commonData/SET_ERROR');
    state.errors = payload;
    Core.log(state.error);
  },
  // 画面ローディング表示
  SHOW_LOADING(state) {
    Core.log('[mutation] commonData/SHOW_LOADING');
    state.loading = true;
  },
  // 画面ローディング非表示
  HIDE_LOADING(state) {
    Core.log('[mutation] commonData/HIDE_LOADING');
    state.loading = false;
  },
  // axios共通エラー
  AXIOS_ERROR(state) {
    Core.log('[mutation] commonData/AXIOS_ERROR');
    Lib.alertAxiosError();
  },
  AXIOS_ERROR_WITH_HIDE_LOADING(state) {
    Core.log('[mutation] commonData/AXIOS_ERROR_WITH_HIDE_LOADING');
    Lib.alertAxiosError();
    state.loading = false;
  },
};


/**
 * actions
 */
const actions = {
  // ログイン処理
  login({ commit }, { option }) {
    Core.log('[action] commonData/login');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
