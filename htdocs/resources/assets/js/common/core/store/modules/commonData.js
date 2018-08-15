import * as Core from '../../app';


/**
 * state
 */
const state = {
  me: {},
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
};


/**
 * mutations
 */
const mutations = {
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
};


/**
 * actions
 */
const actions = {
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
