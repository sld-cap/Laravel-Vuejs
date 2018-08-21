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
};


/**
 * getters
 */
const getters = {
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
  setGetCorpusListResult(state, payload) {
    Core.log('[store] setGetCorpusListResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.corpusList = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // 取得: コーパスデータセット
  setGetCorpusInfoResult(state, payload) {
    Core.log('[store] setGetCorpusInfoResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.corpusInfo = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      location.href = '/corpus';
    }
  },
  // 更新: コーパスデータ更新処理結果
  setSaveCorpusInfoResult(state, payload) {
    Core.log('[store] setSaveCorpusInfoResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompEditCorpusInfoModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setCorpusEditError', payload.errors);
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
  // 削除: コーパスデータ削除処理結果
  setDeleteCorpusResult(state, payload) {
    Core.log('[store] setDeleteCorpusResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      alert('コーパスの削除が完了しました。\nコーパス管理画面に戻ります。');
      location.href = '/corpus';
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    this.commit('commonData/hideLoading');
  },
  // 学習: コーパス学習実行処理結果
  setTrainingCorpusResult(state, payload) {
    Core.log('[store] setTrainingCorpusResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      alert('ただ今学習中です。完了まで15分程度かかります。\n完了までそのままお待ちください。');
      this.dispatch('corpusData/getCorpusInfo');
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
    this.commit('commonData/hideLoading');
  },
  // 学習中コーパスの学習完了タイマーセット
  execCheckCorpusTrainingTimer(state) {
    const interval = 30000; // 30秒に1回
    const corpus_id = this.getters['commonData/corpusId'];

    state.timer = setInterval(() => {
      this.dispatch('corpusData/checkCorpusTrainingDone', { corpus_id });
      Core.log('timer');
    }, interval);

    // 初回起動
    this.dispatch('corpusData/checkCorpusTrainingDone');
  },
  // 学習完了チェック結果
  setCheckCorpusTrainingDoneResult(state, payload) {
    Core.log('[store] setTrainingCorpusResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      alert('コーパスの学習が完了しました');
      this.dispatch('corpusData/getCorpusInfo');
      clearInterval(state.timer);
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      // Lib.alertVendorEscalation(resCode);
    }
  },
  // コーパス本番反映処理結果
  setDeployCorpusResult(state, payload) {
    Core.log('[store] setDeployCorpusResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      alert('本番反映が完了しました');
      this.dispatch('corpusData/getCorpusInfo');
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
  getCorpusList({ commit }) {
    Core.log('[store] getCorpusList');
    const apiOption = { ...ApiConfig.getCorpusList };
    Ajax.exec(apiOption, commit, 'setGetCorpusListResult');
  },
  // 取得（詳細）
  getCorpusInfo({ commit }) {
    Core.log('[store] getCorpusInfo');
    // const apiOption = Object.assign({}, ApiConfig['getCorpus']);
    const apiOption = { ...ApiConfig.getCorpus };
    const corpusId = this.getters['commonData/corpusId'];
    apiOption.url = apiOption.url.replace(/{corpusId}/g, corpusId);

    Ajax.exec(apiOption, commit, 'setGetCorpusInfoResult');
  },
  // 編集
  saveCorpus({ commit }, { corpus_id, name, description, language }) {
    Core.log('[store] getCorpusInfo');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.saveCorpusInfo };
    // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    apiOption.data = {
      corpus_id, name, description, language,
    };

    Ajax.exec(apiOption, commit, 'setSaveCorpusInfoResult', 'hideLoading');
  },
  // 削除
  deleteCorpus({ commit }, { corpus_id }) {
    Core.log('[store] deleteCorpus');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.deleteCorpusInfo };
    // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    Ajax.exec(apiOption, commit, 'setDeleteCorpusResult', 'hideLoading');
  },
  // 学習
  trainingCorpus({ commit }, { corpus_id }) {
    Core.log('[store] trainingCorpus');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.trainingCorpus };
    // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    Ajax.exec(apiOption, commit, 'setTrainingCorpusResult', 'hideLoading');
  },
  // 学習完了チェック
  checkCorpusTrainingDone({ commit }, { corpus_id }) {
    Core.log('[store] checkCorpusTrainingDone');

    const apiOption = { ...ApiConfig.checkCorpusTrainingDone };
    // // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    Ajax.exec(apiOption, commit, 'setCheckCorpusTrainingDoneResult');
  },
  // 本番反映
  deployCorpus({ commit }, { corpus_id, api_id }) {
    Core.log('[store] deployCorpus');
    this.commit('commonData/showLoading');

    const apiOption = { ...ApiConfig.deployCorpus };
    // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    apiOption.data = { api_id };
    Ajax.exec(apiOption, commit, 'setDeployCorpusResult', 'hideLoading');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
