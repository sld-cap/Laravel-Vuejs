import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  trainingData: [],
};


/**
 * getters
 */
const getters = {
  // コーパス情報取得
  trainingData: (state) => {
    return state.trainingData;
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
};


/**
 * mutations
 */
const mutations = {
  // 教師データセット
  setGetTrainingDataResult(state, payload) {
    Core.log('[store] setGetTrainingDataResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      state.trainingData = payload.data;
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // 登録: 教師データ登録結果チェック
  setAddTrainingData(state, payload) {
    Core.log('[store] setAddTrainingData');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompAddTrainingDataModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setTrainingDataAddError', payload.errors);
      } else {
        Lib.alertVendorEscalation(resCode);
      }
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // 編集: 教師データ編集結果チェック
  setSaveTrainingData(state, payload) {
    Core.log('[store] setSaveTrainingData');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompEditTrainingDataModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setTrainingDataEditError', payload.errors);
      } else {
        Lib.alertVendorEscalation(resCode);
      }
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // 削除: 教師データ削除結果チェック
  setDeleteTrainingData(state, payload) {
    Core.log('[store] setDeleteTrainingData');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompDeleteTrainingDataModal');
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // アップロード: 教師データCSVアップロード結果チェック
  setUploadTrainingDataCsvResult(state, payload) {
    Core.log('[store] setUploadTrainingDataCsvResult');
    Core.log(payload);
    const resCode = payload.code;

    if (resCode === 200) {
      this.dispatch('multiModal/showCompUploadTrainingDataCsvModal');
    } else if (resCode === 400) {
      if (payload.errors.length > 0) {
        this.commit('multiModal/setTrainingDataUploadError', payload.errors);
      } else {
        Lib.alertVendorEscalation(resCode);
      }
    } else if (resCode === 401) {
      Lib.alertRefreshToken();
    } else {
      Lib.alertVendorEscalation(resCode);
    }
  },
  // ダウンロード: 教師データCSVダウンロード結果チェック
  setDownloadTrainingDataCsvResult(state, payload) {
    Core.log('[store] setDownloadTrainingDataCsvResult');
    Core.log(payload);

    // if (payload.code === 200) {
    //   // 完了モーダルを開く
    //   this.dispatch('multiModal/showCompUploadTrainingDataCsvModal');
    // } else {
    //   // エラーデータセット
    //   this.commit('multiModal/setTrainingDataUploadError', payload.errors);
    // }
  },
};


/**
 * actions
 */
const actions = {
  // 取得
  getTrainingData({ commit, state }) {
    Core.log('[store] getCorpusInfoAtDataManage');
    state.trainingData = [];

    const apiOption = { ...ApiConfig.getTrainingData };
    const corpusId = this.getters['commonData/corpusId'];
    apiOption.url = apiOption.url.replace(/{training_datum}/g, corpusId);

    Ajax.exec(apiOption, commit, 'setGetTrainingDataResult');
  },
  // 登録
  addTrainingData({ commit }, {corpus_id, data_type, corpus_class_id, add_class_name, content}) {
    Core.log('[store] addTrainingData');

    const apiOption = Object.assign({}, ApiConfig.addTrainingData);
    apiOption.data = {
      corpus_id, data_type, corpus_class_id, add_class_name, content,
    };
    Ajax.exec(apiOption, commit, 'setAddTrainingData');
  },
  // 編集
  saveTrainingData({ commit }, {corpus_id, data_type, corpus_class_id, creative_id, content}) {
    Core.log('[store] saveTrainingData');

    const apiOption = Object.assign({}, ApiConfig.saveTrainingData);
    apiOption.url = apiOption.url.replace(/{creative_id}/g, creative_id);
    const add_class_name = '';

    apiOption.data = {
      corpus_id, data_type, corpus_class_id, content, add_class_name, creative_id,
    };
    Ajax.exec(apiOption, commit, 'setSaveTrainingData');
  },
  // 削除
  deleteTrainingData({ commit }, { creative_id }) {
    Core.log('[store] deleteTrainingData');

    const apiOption = Object.assign({}, ApiConfig.deleteTrainingData);
    apiOption.url = apiOption.url.replace(/{creative_id}/g, creative_id);
    Ajax.exec(apiOption, commit, 'setDeleteTrainingData');
  },
  // 一括登録
  uploadTrainingDataCsv({ commit, state }, { csv_file, data_type }) {
    Core.log('[store] upload');
    const apiOption = Object.assign({}, ApiConfig.uploadTrainingData);
    const corpusId = this.getters['commonData/corpusId'];
    apiOption.url = apiOption.url.replace(/{corpus_id}/g, corpusId);

    // ファイル送信
    apiOption.data = new FormData();
    apiOption.data.append('csv_file', csv_file);
    apiOption.data.append('data_type', data_type);
    Ajax.exec(apiOption, commit, 'setUploadTrainingDataCsvResult');
  },
  // CSVダウンロード
  downloadTrainingDataCsv({ commit, state }) {
    Core.log('[store] upload');
    const apiOption = Object.assign({}, ApiConfig.downloadTrainingData);
    const corpusId = this.getters['commonData/corpusId'];
    apiOption.url = apiOption.url.replace(/{corpus_id}/g, corpusId);

    // ファイル送信
    Ajax.exec(apiOption, commit, 'setDownloadTrainingDataCsvResult');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
