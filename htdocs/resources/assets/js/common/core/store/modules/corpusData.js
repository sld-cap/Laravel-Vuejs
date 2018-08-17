import * as Core from '../../app';
import * as Ajax from '../../ajax';
import ApiConfig from '../../apiConfig';
import * as Lib from '../../../ext/functions';


/**
 * state
 */
const state = {
  corpusInfo: {},
};


/**
 * getters
 */
const getters = {
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
};


/**
 * mutations
 */
const mutations = {
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
  },
};


/**
 * actions
 */
const actions = {
  // 取得
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

    const apiOption = { ...ApiConfig.saveCorpusInfo };
    // apiOption.url = apiOption.url.replace(/{corpusId}/g, corpus_id);
    apiOption.data = {
      corpus_id, name, description, language,
    };

    Ajax.exec(apiOption, commit, 'setSaveCorpusInfoResult');
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
