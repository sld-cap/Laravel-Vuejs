import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  apiList: [],
  loading: true,
  displayApiTab: {},
};


/**
 * getters
 */
const getters = {
  loading: (state) => {
    Core.log('[store] getters: loading');
    return state.loading;
  },
  // コーパス一覧
  apiList: (state) => {
    Core.log('[store] getters: apiList');
    return state.apiList;
  },
  displayApiTab: (state) => {
    Core.log('[store] getters: displayApiTab');
    return state.displayApiTab;
  },
};


/**
 * mutations
 */
const mutations = {
  //
  setDisplayIndex(state, payload) {
    Core.log('[store] setDisplayIndex');
    Core.log(payload);
    state.displayApiTab = payload;
  },
  // 取得 :API一覧
  setGetApiListResult(state, payload) {
    Core.log('[store] setGetApiListResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.apiList = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    state.loading = false;
  },
};


/**
 * actions
 */
const actions = {
  // 取得（一覧）
  getApiList({ commit, state }) {
    Core.log('[store] getApiList');
    state.loading = true;

    const apiOption = { ...ApiConfig.getApiList };
    Ajax.exec(apiOption, commit, 'setGetApiListResult');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
