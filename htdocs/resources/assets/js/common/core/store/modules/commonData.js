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
  doLogin(state, payload) {
    Core.log('[store] setLoginResult');
    // トークンセット
    Lib.setToken(payload.token);
    // ダッシュボードにログイン
    Lib.login();
  },
  setLoginError(state) {
    Core.log('[store] setLoginError');
    state.loading = false;
    state.loginError = true;
  },
  // ログインユーザ情報セット
  setMe(state, payload) {
    Core.log('[store] setMe');
    state.me = payload;
    Core.log(state.me);
  },
  // 今のコーパスIDをセット
  setCorpusId(state, payload) {
    Core.log('[store] setCorpusId');
    state.corpusId = payload.corpusId;
    Core.log(state.corpusId);
  },
  // 画面エラーセット
  setError(state, payload) {
    Core.log('[store] setError');
    state.errors = payload;
    Core.log(state.error);
  },
  // ローディング開閉
  showLoading(state) {
    Core.log('[store] showLoading');
    state.loading = true;
  },
  hideLoading(state) {
    Core.log('[store] hideLoading');
    state.loading = false;
  },
};


/**
 * actions
 */
const actions = {
  // ログイン処理
  login({ commit, state }, { email, password }) {
    Core.log('[store] login');
    const apiOption = ApiConfig['login'];
    apiOption.data = { email, password };

    Ajax.exec(apiOption, commit, 'doLogin', 'setLoginError');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
