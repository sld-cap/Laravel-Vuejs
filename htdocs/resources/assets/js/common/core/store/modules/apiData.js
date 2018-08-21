import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  apiList: [],
};


/**
 * getters
 */
const getters = {
  // コーパス一覧
  apiList: (state) => {
    Core.log('[store] getters: apiList');
    return state.apiList;
  },
};


/**
 * mutations
 */
const mutations = {
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
  },
};


/**
 * actions
 */
const actions = {
  // 取得（一覧）
  getApiList({ commit }) {
    Core.log('[store] getApiList');
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
