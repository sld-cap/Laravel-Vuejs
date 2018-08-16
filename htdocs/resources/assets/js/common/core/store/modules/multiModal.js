import * as Core from '../../app';


/**
 * state
 */
const state = {
  modalName: '',
  // 開いているモーダルのデータタイプ
  currentDataType: null,
  // クラス／テキストの編集対象
  editTrainingData: {
    class_id: 0,
    creative_id: 0,
    content: '',
  },

  // エラー群
  corpusEditError: [],
  trainingDataAddError: [],
  trainingDataEditError: [],
  trainingDataUploadError: [],
};


/**
 * getters
 */
const getters = {
  editTrainingData: (state) => {
    return state.editTrainingData;
  },
  currentDataType: (state) => {
    return state.currentDataType;
  },
  // エラー
  corpusEditError: (state) => {
    return state.corpusEditError;
  },
  trainingDataAddError: (state) => {
    return state.trainingDataAddError;
  },
  trainingDataEditError: (state) => {
    return state.trainingDataEditError;
  },
  trainingDataUploadError: (state) => {
    return state.trainingDataUploadError;
  },
};


/**
 * mutations
 */
const mutations = {
  setModal(state, name) {
    state.modalName = name;
    Core.log(`state.modalName: ${state.modalName}`);
  },
  hideModal(state) {
    state.modalName = '';
    state.currentDataType = null;
  },
  // エラーセット
  setCorpusEditError(state, errors) {
    Core.log('[store] setCorpusEditError');
    state.corpusEditError = errors;
  },
  setTrainingDataAddError(state, errors) {
    Core.log('[store] setTrainingDataAddError');
    state.trainingDataAddError = errors;
  },
  setTrainingDataEditError(state, errors) {
    Core.log('[store] setTrainingDataEditError');
    state.trainingDataEditError = errors;
  },
  setTrainingDataUploadError(state, errors) {
    Core.log('[store] setTrainingDataUploadError');
    state.trainingDataUploadError = errors;
  },
};


/**
 * actions
 */
const actions = {
  // コーパス情報: 編集モーダル開閉
  showEditCorpusInfoModal({ commit }) {
    Core.log('[showEditCorpusInfoModal]');
    commit('setModal', 'EditCorpusInfoModal');
  },
  showCompEditCorpusInfoModal({ commit }) {
    Core.log('[showCompEditCorpusInfoModal]');
    commit('setModal', 'CompEditCorpusInfoModal');
  },

  // 教師データ登録モーダル開閉
  showAddTrainingDataModal({ commit, state }, { dataType }) {
    Core.log('[showAddTrainingDataModal]');
    state.currentDataType = dataType;

    commit('setModal', 'AddTrainingDataModal');
  },
  showCompAddTrainingDataModal({ commit }) {
    Core.log('[showCompAddTrainingDataModal]');
    commit('setModal', 'CompAddTrainingDataModal');
  },

  // 教師データ編集モーダル開閉
  showEditTrainingDataModal({ commit, state }, { class_id, creative_id, content, dataType }) {
    Core.log('[showEditTrainingDataModal]');
    state.currentDataType = dataType;

    state.editTrainingData.class_id = class_id;
    state.editTrainingData.creative_id = creative_id;
    state.editTrainingData.content = content;

    commit('setModal', 'EditTrainingDataModal');
  },
  showCompEditTrainingDataModal({ commit }) {
    Core.log('[showCompEditTrainingDataModal]');
    commit('setModal', 'CompEditTrainingDataModal');
  },

  // 教師データSVアップロードモーダル開閉
  showUploadTrainingCsvModal({ commit,state }, { dataType }) {
    Core.log('[showUploadTrainingCsvModal]');
    state.currentDataType = dataType;

    commit('setModal', 'UploadTrainingCsvModal');
  },
  showCompUploadTrainingDataCsvModal({ commit }) {
    Core.log('[showCompUploadTrainingDataCsvModal]');
    commit('setModal', 'CompUploadTrainingCsvModal');
  },

  // 閾値設定モーダル開閉
  showEditThresholdModal({ commit }) {
    Core.log('[showEditThresholdModal]');
    commit('setModal', 'EditThresholdModal');
  },

  // 本番反映モーダル開閉
  showSelectDeployModal({ commit }) {
    Core.log('[showSelectDeployModal]');
    commit('setModal', 'SelectDeployModal');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
