import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';


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
    state.trainingData.filter((classData) => {
      // sum = sum + classData.test_data_count;
      sum += classData.test_data_count;
    });
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
    if (payload.code === 200) {
      state.trainingData = payload.data;
    } else {
      state.errors = payload.errors;
    }
    Core.log(payload);
  },
  // 登録: 教師データ登録結果チェック
  setAddTrainingData(state, payload) {
    Core.log('[store] setAddTrainingData');
    Core.log(payload);

    if (payload.code === 200) {
      // 完了モーダルを開く
      this.dispatch('multiModal/showCompAddTrainingDataModal');
    } else {
      // エラー表示
    }
  },
  // 編集: 教師データ編集結果チェック
  setSaveTrainingData(state, payload) {
    Core.log('[store] setSaveTrainingData');
    Core.log(payload);

    if (payload.code === 200) {
      // 完了モーダルを開く
      this.dispatch('multiModal/showCompEditTrainingDataModal');
    } else {
      // エラー表示
    }
  },
  // アップロード: 教師データCSVアップロード結果チェック
  setUploadTrainingDataCsvResult(state, payload) {
    Core.log('[store] setUploadTrainingDataCsvResult');
    Core.log(payload);

    if (payload.code === 200) {
      // 完了モーダルを開く
      this.dispatch('multiModal/showCompUploadTrainingDataCsvModal');
    } else {
      // エラー表示
    }
  },
};


/**
 * actions
 */
const actions = {
  // 取得
  getTrainingData({ commit }) {
    Core.log('[store] getCorpusInfoAtDataManage');

    const apiOption = { ...ApiConfig['getTrainingData'] };
    const corpusId = this.getters['commonData/corpusId'];
    apiOption.url = apiOption.url.replace(/{training_datum}/g, corpusId);

    Ajax.exec(apiOption, commit, 'setGetTrainingDataResult');
  },
  // 登録
  addTrainingData({ commit, state }, {corpus_id, data_type, corpus_class_id, add_class_name, content}) {
    Core.log('[store] addTrainingData');

    const apiOption = Object.assign({}, ApiConfig['addTrainingData']);
    apiOption.data = {
      corpus_id, data_type, corpus_class_id, add_class_name, content,
    };
    Ajax.exec(apiOption, commit, 'setAddTrainingData');
  },
  // 編集
  saveTrainingData({ commit, state }, {corpus_id, data_type, corpus_class_id, creative_id, content}) {
    Core.log('[store] saveTrainingData');

    const apiOption = Object.assign({}, ApiConfig['saveTrainingData']);
    apiOption.data = {
      corpus_id, data_type, corpus_class_id, creative_id, content,
    };
    Ajax.exec(apiOption, commit, 'setSaveTrainingData');
  },
  // 一括登録
  uploadTrainingDataCsv({ commit, state }, { data_type }) {
    Core.log('[store] upload');
    const apiOption = Object.assign({}, ApiConfig['uploadTrainingData']);
    apiOption.data = {};
    Ajax.exec(apiOption, commit, 'setUploadTrainingDataCsvResult');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
