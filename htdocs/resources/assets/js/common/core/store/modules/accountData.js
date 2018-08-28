import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  accountList: [],
  loading: true,
};


/**
 * getters
 */
const getters = {
  // コーパス一覧
  accountList: (state) => {
    Core.log('[store] getters: accountList');
    Core.log(state.accountList);
    return state.accountList;
  },
  loading: (state) => {
    Core.log('[store] getters: loading');
    return state.loading;
  },
};


/**
 * mutations
 */
const mutations = {
  // 取得 :アカウント一覧
  SET_LIST(state, payload) {
    Core.log('[mutation] accountData/SET_LIST');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        state.accountList = payload.data;
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        Lib.alertVendorEscalation(resCode);
        break;
    }
    state.loading = false; // 一覧ローディング非表示
  },
  // 登録
  ADD_RESULT(state, payload) {
    Core.log('[mutation] accountData/ADD_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompAddAccountModal');
        this.dispatch('accountData/getList');
        break;
      case 400:
        if (payload.errors.length > 0) {
          this.commit('multiModal/setCommonError', payload.errors);
        } else {
          Lib.alertVendorEscalation(resCode);
        }
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        Lib.alertVendorEscalation(resCode);
        break;
    }
    this.commit('commonData/HIDE_LOADING');
  },
  // 編集
  SAVE_RESULT(state, payload) {
    Core.log('[mutation] accountData/SAVE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompEditAccountModal');
        this.dispatch('accountData/getList');
        break;
      case 400:
        if (payload.errors.length > 0) {
          this.commit('multiModal/setCommonError', payload.errors);
        } else {
          Lib.alertVendorEscalation(resCode);
        }
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        Lib.alertVendorEscalation(resCode);
        break;
    }
    this.commit('commonData/HIDE_LOADING');
  },
  // 削除
  DELETE_RESULT(state, payload) {
    Core.log('[mutation] accountData/DELETE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompDeleteAccountModal');
        this.dispatch('accountData/getList');
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        Lib.alertVendorEscalation(resCode);
        break;
    }
    this.commit('commonData/HIDE_LOADING');
  },
};


/**
 * actions
 */
const actions = {
  // 取得（一覧）
  getList({ commit, state }) {
    Core.log('[action] accountData/getList');
    state.loading = true; // 一覧ローディング表示

    const option = Lib.getApiConfig('getAccountList');
    Ajax.exec(this.commit, option);
  },
  // 登録
  add({ commit }, { option }) {
    Core.log('[action] accountData/add');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 編集
  save({ commit }, { option }) {
    Core.log('[action] accountData/save');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 削除
  delete({ commit }, { option }) {
    Core.log('[action] accountData/delete');
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
