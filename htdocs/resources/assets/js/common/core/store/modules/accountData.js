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
  setGetAccountListResult(state, payload) {
    Core.log('[store] setGetAccountListResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.accountList = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    state.loading = false;
  },
  // 登録
  setAddAccountResult(state, payload) {
    Core.log('[store] setAddAccountResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompAddAccountModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setAccountAddError', payload.errors);
      } else {
        Lib.alertVendorEscalation(resCode);
      }
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    this.commit('commonData/hideLoading');
  },
  // 編集
  setSaveAccountResult(state, payload) {
    Core.log('[store] setSaveAccountResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompEditAccountModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setAccountEditError', payload.errors);
      } else {
        Lib.alertVendorEscalation(resCode);
      }
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    this.commit('commonData/hideLoading');
  },
  // 削除
  setDeleteAccountResult(state, payload) {
    Core.log('[store] setDeleteAccountResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompDeleteAccountModal');
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    this.commit('commonData/hideLoading');
  },
  // ajaxでエラー時にローディング削除する用
  hideLoading() {
    Core.log('[store] hideLoading');
    this.commit('commonData/hideLoading');
  },
};


/**
 * actions
 */
const actions = {
  // 取得（一覧）
  getAccountList({ commit, state }) {
    Core.log('[store] getAccountList');
    state.loading = true;

    const apiOption = { ...ApiConfig.getAccountList };
    Ajax.exec(apiOption, commit, 'setGetAccountListResult');
  },
  // 登録
  addAccount({ commit }, { sei_kanji, mei_kanji, email, password }) {
    Core.log('[store] addAccount');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.addAccount };
    apiOption.data = {
      sei_kanji, mei_kanji, email, password
    };
    Ajax.exec(apiOption, commit, 'setAddAccountResult', 'hideLoading');
  },
  // 編集
  saveAccount({ commit }, { sei_kanji, mei_kanji, email, password, id }) {
    Core.log('[store] editAccount');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.saveAccount };
    apiOption.data = {
      sei_kanji, mei_kanji, email, password, id,
    };
    Ajax.exec(apiOption, commit, 'setSaveAccountResult', 'hideLoading');
  },
  // 編集
  deleteAccount({ commit }, { id }) {
    Core.log('[store] deleteAccount');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.deleteAccount };
    apiOption.data = { id };
    Ajax.exec(apiOption, commit, 'setDeleteAccountResult', 'hideLoading');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
