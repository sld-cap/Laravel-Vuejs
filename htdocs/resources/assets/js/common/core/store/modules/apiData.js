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
  checkedIndex: null,
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
  // 表示対象
  checkedIndex: (state) => {
    Core.log('[store] getters: checkedIndex');
    return state.checkedIndex;
  },
};


/**
 * mutations
 */
const mutations = {
  //
  setCheckedIndex(state, payload) {
    Core.log('[store] setCheckedIndex');
    Core.log(payload);
    state.checkedIndex = payload;
  },
  // 取得 :API一覧
  setGetApiListResult(state, payload) {
    Core.log('[store] setGetApiListResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.apiList = payload.data;
      state.checkedIndex = 0;
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
