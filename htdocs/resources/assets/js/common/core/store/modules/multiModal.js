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
    class_id: null,
    creative_id: null,
    content: '',
  },
  // テキスト削除対象
  deleteTrainingData: {
    creative_id: null,
  },
  // アカウント編集対象
  editAccountIndex: null,
  // アカウント削除対象
  deleteAccountIndex: null,

  // エラー群
  corpusAddError: [],
  corpusEditError: [],
  trainingDataAddError: [],
  trainingDataEditError: [],
  trainingDataUploadError: [],
  accountAddError: [],
  accountEditError: [],

  // modal
  commonError: [],
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
  deleteTrainingData: (state) => {
    return state.deleteTrainingData;
  },
  editAccountIndex: (state) => {
    return state.editAccountIndex;
  },
  deleteAccountIndex: (state) => {
    return state.deleteAccountIndex;
  },
  // エラー
  commonError: (state) => {
    return state.commonError;
  },
  corpusAddError: (state) => {
    return state.corpusAddError;
  },
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
  accountAddError: (state) => {
    return state.accountAddError;
  },
  accountEditError: (state) => {
    return state.accountEditError;
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
  setCommonError(state, errors) {
    Core.log('[mutation] multiModal/setCommonError');
    state.commonError = errors;
  },
  setCorpusAddError(state, errors) {
    Core.log('[store] setCorpusAddError');
    state.corpusAddError = errors;
  },
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
  setAccountAddError(state, errors) {
    Core.log('[store] setAccountAddError');
    state.accountAddError = errors;
  },
  setAccountEditError(state, errors) {
    Core.log('[store] setAccountEditError');
    state.accountEditError = errors;
  },
  // リロード処理
  reloadTrainingData() {
    Core.log('[store] reloadTrainingData');
    this.dispatch('corpusTrainingData/getTrainingData');
  },
};


/**
 * actions
 */
const actions = {
  // コーパス情報: 作成モーダル開閉
  showAddCorpusInfoModal({ commit }) {
    Core.log('[showAddCorpusInfoModal]');
    commit('setModal', 'AddCorpusModal');
  },
  showCompAddCorpusModal({ commit }) {
    Core.log('[showCompAddCorpusModal]');
    commit('setModal', 'CompAddCorpusModal');
  },

  // コーパス情報: 編集モーダル開閉
  showEditCorpusInfoModal({ commit }) {
    Core.log('[showEditCorpusInfoModal]');
    commit('setModal', 'EditCorpusInfoModal');
  },
  showCompEditCorpusModal({ commit }) {
    Core.log('[showCompEditCorpusModal]');
    commit('setModal', 'CompEditCorpusInfoModal');
  },

  // コーパス情報: 削除モーダル
  showDeleteCorpusInfoModal({ commit }) {
    Core.log('[showDeleteCorpusInfoModal]');
    commit('setModal', 'DeleteCorpusInfoModal');
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

  // 教師データ削除モーダル開閉
  showDeleteTrainingDataModal({ commit, state }, creative_id) {
    Core.log('[showDeleteTrainingDataModal]');
    state.deleteTrainingData.creative_id = creative_id;

    commit('setModal', 'DeleteTrainingDataModal');
  },
  showCompDeleteTrainingDataModal({ commit }) {
    Core.log('[showCompDeleteTrainingDataModal]');
    commit('setModal', 'CompDeleteTrainingDataModal');
  },

  // 教師データCSVアップロードモーダル開閉
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

  // アカウント登録モーダル
  showAddAccountModal({ commit }) {
    Core.log('[showAddAccountModal]');
    commit('setModal', 'AddAccountModal');
  },
  showCompAddAccountModal({ commit }) {
    Core.log('[showCompAddAccountModal]');
    commit('setModal', 'CompAddAccountModal');
  },
  // アカウント編集モーダル
  showEditAccountModal({ commit, state }, { index }) {
    Core.log('[showEditAccountModal]');
    state.editAccountIndex = index;

    commit('setModal', 'EditAccountModal');
  },
  showCompEditAccountModal({ commit }) {
    Core.log('[showCompEditAccountModal]');
    commit('setModal', 'CompEditAccountModal');
  },
  // アカウント編集モーダル
  showDeleteAccountModal({ commit, state }, { index }) {
    Core.log('[showDeleteAccountModal]');
    state.deleteAccountIndex = index;

    commit('setModal', 'DeleteAccountModal');
  },
  showCompDeleteAccountModal({ commit }) {
    Core.log('[showCompDeleteAccountModal]');
    commit('setModal', 'CompDeleteAccountModal');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
