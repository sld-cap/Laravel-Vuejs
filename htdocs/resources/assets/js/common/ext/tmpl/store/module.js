import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  // 必要な変数を記述しておく
  xxxList: [], // 例）xxxデータの一覧を格納する
  xxxData: {}, // 例）1件のxxxデータを格納する
  loading: true, // 例）一覧データ取得時の画面ローディング表示フラグ
};


/**
 * getters
 */
const getters = {
  // Vueコンポーネント側でstateのデータをゲットするための設定
  xxxList: (state) => { // 例）xxxListをvueコンポーネント側に渡す
    return state.xxxList;
  },
  xxxList: (state) => { // 例）xxxDataをvueコンポーネント側に渡す
    return state.xxxList;
  },
  loading: (state) => { // 例）loadingをvueコンポーネント側に渡す
    return state.loading;
  },
};


/**
 * mutations
 */
const mutations = {
  // 同期的に行う処理を記述する
  setGetXxxListResult(state, payload) { // 例）xxxListをaxiosで非同期取得した後の処理
    Core.log('[store] setGetXxxListResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.xxxList = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else if (resCode === 404) {
      state.trainingData = [];
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    state.loading = false;
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
  // 非同期的に行う処理を記述する
  getXxxList({ commit, state }) { // 例）xxxデータの一覧を取得する
    Core.log('[store] getXxxList');
    state.xxxList = [];
    state.loading = true;

    const apiOption = { ...ApiConfig.getXxxList };
    Ajax.exec(apiOption, commit, 'setGetXxxListResult', 'hideLoading');
  },

};

/**
 * export
 */
export default { // storeファイルでモジュールとして読み込むためにexportする
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};