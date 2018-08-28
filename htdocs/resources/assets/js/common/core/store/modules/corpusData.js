import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  corpusInfo: {},
  corpusList: [],
  timer: null,
  loading: false,
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
  corpusList: (state) => {
    Core.log('[store] getters: corpusList');
    Core.log(state.corpusList);
    return state.corpusList;
  },
  // コーパス情報取得
  corpusInfo: (state) => {
    return state.corpusInfo;
  },
  corpusName: (state) => {
    return state.corpusInfo.name;
  },
  // コーパス言語のラベル返却
  CorpuslanguageLabel: (state) => {
    let label = '';
    if (state.corpusInfo.language !== undefined) {
      const languageIndex = parseInt(state.corpusInfo.language, 10);
      label = Core.CorpusLanguage[languageIndex].label;
    }
    return label;
  },
  // コーパスのステータス
  corpusStatus: (state) => {
    return state.corpusInfo.status;
  },
  // 現在のステータス
  corpusCurrentStatus: (state) => {
    let status = '';
    const currentStatus = state.corpusInfo.status;
    if (currentStatus !== undefined) {
      status = Core.CorpusStateType[currentStatus].status;
    }
    return status;
  },
  // ステップ02ボタンメッセージ
  corpusAiTrainingBtnMsg: (state) => {
    let msg = '';
    const currentStatus = state.corpusInfo.status;
    if (currentStatus !== undefined) {
      msg = Core.CorpusStateType[currentStatus].availableMsg;
    }
    return msg;
  },
  // コーパスのステータス
  isProduction: (state) => {
    return state.corpusInfo.is_production;
  },
};


/**
 * mutations
 */
const mutations = {
  // 取得 :コーパス一覧
  SET_LIST(state, payload) {
    Core.log('[mutation] corpusData/SET_LIST');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        state.corpusList = payload.data;
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
  // 取得: コーパス詳細
  SET_DETAIL(state, payload) {
    Core.log('[mutation] corpusData/SET_DETAIL');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        state.corpusInfo = payload.data;
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        alert('該当のコーパスデータが見つかりませんでした。\nCAP管理画面に戻ります。');
        location.href = '/corpus';
        break;
    }
    state.loading = false; // 一覧ローディング非表示
  },
  // 登録結果
  ADD_RESULT(state, payload) {
    Core.log('[mutation] corpusData/ADD_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompAddCorpusModal');
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
  // 更新結果
  EDIT_RESULT(state, payload) {
    Core.log('[mutation] corpusData/EDIT_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompEditCorpusModal');
        this.dispatch('corpusData/getList');
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
  // 削除: コーパスデータ削除処理結果
  DELETE_RESULT(state, payload) {
    Core.log('[mutation] corpusData/DELETE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        alert('コーパスの削除が完了しました。\nコーパス管理画面に戻ります。');
        location.href = '/corpus';
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
  // 学習実行結果
  TRAINING_RESULT(state, payload) {
    Core.log('[mutation] corpusData/TRAINING_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        alert('ただ今学習中です。完了まで15分程度かかります。\n完了までそのままお待ちください。');
        this.dispatch('corpusData/getDetail');
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
  // 学習中コーパスの学習完了タイマーセット
  SET_CHECK_TRAINING_DONE_TIMER(state) {
    const interval = 30000; // 30秒に1回
    const corpus_id = this.getters['commonData/corpusId'];

    state.timer = setInterval(() => {
      this.dispatch('corpusData/isTrainingDone', { corpus_id });
      Core.log('timer');
    }, interval);

    // 初回起動
    this.dispatch('corpusData/isTrainingDone');
  },
  // 学習完了チェック結果
  TRAINING_DONE_RESULT(state, payload) {
    Core.log('[mutation] corpusData/TRAINING_DONE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        alert('コーパスの学習が完了しました');
        this.dispatch('corpusData/getDetail');
        clearInterval(state.timer);
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      default:
        // Lib.alertVendorEscalation(resCode);
        break;
    }
  },
  // コーパス本番反映処理結果
  DEPLOY_RESULT(state, payload) {
    Core.log('[mutation] corpusData/DEPLOY_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        alert('本番反映が完了しました');
        this.dispatch('corpusData/getDetail');
        clearInterval(state.timer);
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
  getList({ state }) {
    Core.log('[action] corpusData/getList');
    state.loading = true; // 一覧ローディング表示

    const option = Lib.getApiConfig('getCorpusList');
    Ajax.exec(this.commit, option);
  },
  // 取得（詳細）
  getDetail({ state }) {
    Core.log('[action] corpusData/getDetail');
    state.loading = true; // 一覧ローディング表示

    const option = Lib.getApiConfig('getCorpusDetail');
    const corpusId = this.getters['commonData/corpusId'];
    option.url = option.url.replace(/{corpus}/g, corpusId);

    Ajax.exec(this.commit, option);
  },
  // 登録
  add({ commit }, { option }) {
    Core.log('[action] corpusData/add');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 編集
  save({ commit }, { option }) {
    Core.log('[action] corpusData/save');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 削除
  delete({ commit }, { option }) {
    Core.log('[action] corpusData/delete');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 学習
  training({ commit }, { option }) {
    Core.log('[action] corpusData/training');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 学習完了チェック
  isTrainingDone({ commit }, { corpus_id }) {
    Core.log('[action] corpusData/isTrainingDone');
    const option = Lib.getApiConfig('isTrainingDone');
    option.url = option.url.replace(/{corpus}/g, corpus_id);
    Ajax.exec(this.commit, option);
  },
  // 本番反映
  deploy({ commit }, { option }) {
    Core.log('[action] corpusData/deploy');
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
