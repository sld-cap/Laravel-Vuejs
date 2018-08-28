import * as Core from '../../app';
import * as Ajax from '../../ajax';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  trainingData: [],
  loading: true,
};


/**
 * getters
 */
const getters = {
  // コーパス情報取得
  trainingData: (state) => {
    return state.trainingData;
  },
  loading: (state) => {
    return state.loading;
  },
  // テストデータ件数
  testDataCount: (state) => {
    let sum = 0;

    if (state.trainingData !== undefined && state.trainingData.length > 0) {
      state.trainingData.filter((classData) => {
        sum += parseInt(classData.test_data_count, 10);
      });
    }
    return sum;
  },
  // 学習データ件数
  trainingDataCount: (state) => {
    Core.log('[store] trainingDataCount');
    let sum = 0;

    if (state.trainingData !== undefined && state.trainingData.length > 0) {
      state.trainingData.filter((classData) => {
        Core.log(classData.training_data_count);
        sum += parseInt(classData.training_data_count, 10);
      });
    }
    return sum;
  },
};


/**
 * mutations
 */
const mutations = {
  // 一覧取得結果
  SET_LIST(state, payload) {
    Core.log('[mutation] corpusTrainingData/SET_LIST');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        state.trainingData = payload.data;
        break;
      case 401:
        Lib.alertRefreshToken();
        break;
      case 404:
        state.trainingData = [];
        break;
      default:
        Lib.alertVendorEscalation(resCode);
        break;
    }
    state.loading = false; // 一覧ローディング非表示
  },
  // 登録: 教師データ登録結果チェック
  ADD_RESULT(state, payload) {
    Core.log('[mutation] corpusTrainingData/ADD_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompAddTrainingDataModal');
        this.dispatch('corpusTrainingData/getList');
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
  // 編集: 教師データ編集結果チェック
  SAVE_RESULT(state, payload) {
    Core.log('[mutation] corpusTrainingData/SAVE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompEditTrainingDataModal');
        this.dispatch('corpusTrainingData/getList');
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
  // 削除: 教師データ削除結果チェック
  DELETE_RESULT(state, payload) {
    Core.log('[mutation] corpusTrainingData/DELETE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompDeleteTrainingDataModal');
        this.dispatch('corpusTrainingData/getList');
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
  // アップロード: 教師データCSVアップロード結果チェック
  CSV_UPLOAD_RESULT(state, payload) {
    Core.log('[mutation] corpusTrainingData/SAVE_RESULT');
    const resCode = payload.code;

    switch (resCode) {
      case 200:
        this.dispatch('multiModal/showCompUploadTrainingDataCsvModal');
        this.dispatch('corpusTrainingData/getList');
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
  // ダウンロード: 教師データCSVダウンロード結果チェック
  CSV_DOWNLOAD_RESULT(state, payload) {
    Core.log('[mutation] corpusTrainingData/CSV_DOWNLOAD_RESULT');
    const resCode = payload.code;
    const content = payload.data;
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const url = window.URL.createObjectURL(new Blob([bom, content], {
      type: 'text/csv',
    }));
    const filename = 'training_data.csv';

    switch (resCode) {
      case 200:
        Lib.execFileDownload(url, filename);
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
  // 取得
  getList({ commit, state }) {
    Core.log('[action] corpusTraningData/getList');
    state.loading = true; // 一覧ローディング表示

    const option = Lib.getApiConfig('getTrainingDataList');
    const corpusId = this.getters['commonData/corpusId'];
    option.url = option.url.replace(/{training_datum}/g, corpusId);

    Ajax.exec(this.commit, option);
  },
  // 登録
  add({ commit }, { option }) {
    Core.log('[action] corpusTraningData/add');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 編集
  save({ commit }, { option }) {
    Core.log('[action] corpusTraningData/save');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 削除
  delete({ commit }, { option }) {
    Core.log('[action] corpusTraningData/delete');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // 一括登録
  upload({ commit }, { option }) {
    Core.log('[action] corpusTraningData/upload');
    this.commit('commonData/SHOW_LOADING');
    Ajax.exec(this.commit, option);
  },
  // CSVダウンロード
  download({ commit }, { option }) {
    Core.log('[action] corpusTraningData/download');
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
