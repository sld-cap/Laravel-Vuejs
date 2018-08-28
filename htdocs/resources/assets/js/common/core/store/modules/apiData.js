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
  // 取得 :API一覧
  SET_LIST(state, payload) {
    Core.log('[mutation] accountData/SET_LIST');
    const resCode = payload.code;

    switch(resCode) {
      case 200:
        state.apiList = payload.data;
        state.checkedIndex = 0;
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
  //
  setCheckedIndex(state, payload) {
    Core.log('[store] setCheckedIndex');
    Core.log(payload);
    state.checkedIndex = payload;
  },
};


/**
 * actions
 */
const actions = {
  // 取得（一覧）
  getList({ commit, state }) {
    Core.log('[action] apiData/getList');
    state.loading = true; // 一覧ローディング表示

    const option = Lib.getApiConfig('getApiList');
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
