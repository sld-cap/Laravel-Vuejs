const API_CONFIG = {
  /**
   * システム共通
   */
  login: { // ログイン
    url: '/api/authenticate',
    method: 'POST',
    header: {},
    params: {},
    data: {
      email: null,
      password: null,
      remember_me: false,
    },
    mutation: {
      success: 'commonData/LOGIN',
      error: 'commonData/LOGIN_ERROR',
    },
  },
  logout: { // ログアウト
    url: '',
    method: 'GET',
    params: {},
  },
  auth: { // 自分の情報取得
    url: '/api/v1/me',
    method: 'GET',
  },

  /**
   * コーパス管理
   */
  getCorpusList: { // コーパス一覧取得
    url: '/stub/data/CorpusListGetSuccess.json', // 処理成功用stub
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusData/SET_LIST',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  getCorpusDetail: { // コーパス詳細取得
    url: '/api/v1/corpus/{corpus}',
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusData/SET_DETAIL',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  addCorpus: { // コーパスの作成
    // url: '/api/v1/corpus',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/CorpusAddError.json', // 処理失敗用stub
    method: 'POST',
    header: {},
    params: {},
    data: {
      name: '',
      description: '',
      language: 0,
    },
    mutation: {
      success: 'corpusData/ADD_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  saveCorpus: { // コーパスの編集
    // url: '/api/v1/corpus',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/corpusEditError.json', // 処理失敗用stub
    method: 'POST',
    header: {},
    params: {},
    data: {
      name: '',
      description: '',
      language: '',
    },
    mutation: {
      success: 'corpusData/EDIT_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  deleteCorpus: { // コーパスの削除
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'DELETE',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusData/DELETE_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },

  /**
   * コーパスの学習
   */
  trainingCorpus: { // AI学習の実行
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'POST',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusData/TRAINING_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  isTrainingDone: { // AI学習が完了したかどうかの確認
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusData/TRAINING_DONE_RESULT',
      error: '',
    },
  },

  /**
   * コーパスの本番反映
   */
  deployCorpus: {
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'POST',
    header: {},
    params: {},
    data: {
      api_id: '',
    },
    mutation: {
      success: 'corpusData/DEPLOY_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },

  /**
   * 教師データの管理
   */
  getTrainingDataList: { // 教師データ一覧取得
    url: '/api/v1/training-data/{training_datum}',
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusTrainingData/SET_LIST',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  addTrainingData: { // 教師データの登録
    url: '/api/v1/training-data',
    method: 'POST',
    header: {},
    params: {},
    data: {
      corpus_id: '',
      data_type: '',
      corpus_class_id: '',
      add_class_name: '',
      content: '',
    },
    mutation: {
      success: 'corpusTrainingData/ADD_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  saveTrainingData: { // 教師データの編集
    url: '/api/v1/training-data/{creative_id}',
    method: 'PUT',
    header: {},
    params: {},
    data: {
      corpus_id: '',
      data_type: '',
      corpus_class_id: '',
      add_class_name: '',
      content: '',
    },
    mutation: {
      success: 'corpusTrainingData/SAVE_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  deleteTrainingData: { // 教師データの削除
    url: '/api/v1/training-data/{creative_id}',
    method: 'DELETE',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusTrainingData/DELETE_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  uploadTrainingData: { // 教師データのアップロード
    url: '/api/v1/training-data/{corpus_id}/upload',
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
    },
    params: {},
    data: {
      csv_file: '',
      data_type: '',
    },
    mutation: {
      success: 'corpusTrainingData/CSV_UPLOAD_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },
  downloadTrainingData: { // 教師データのダウンロード
    url: '/api/v1/training-data/{corpus_id}/download',
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'corpusTrainingData/CSV_DOWNLOAD_RESULT',
      error: 'commonData/AXIOS_ERROR_WITH_HIDE_LOADING',
    },
  },

  /**
   * アカウントの管理
   */
  getAccountList: { // アカウント一覧取得
    url: '/stub/data/AccountListGetSuccess.json', // stub
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'accountData/SET_LIST',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  addAccount: { // アカウントの作成
    // url: '/api/v1/users',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'POST',
    header: {},
    params: {},
    data: {
      sei_kanji: '',
      mei_kanji: '',
      email: '',
      password: '',
    },
    mutation: {
      success: 'accountData/ADD_RESULT',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  saveAccount: { // アカウントの編集
    // url: '/api/v1/users/{user}',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'POST',
    header: {},
    params: {},
    data: {
      sei_kanji: '',
      mei_kanji: '',
      email: '',
      password: '',
    },
    mutation: {
      success: 'accountData/SAVE_RESULT',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },
  deleteAccount: { // アカウントの削除
    // url: '/api/v1/users/{user}',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'DELETE',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'accountData/DELETE_RESULT',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },

  /**
   * APIデータの管理
   */
  getApiList: { // API一覧取得
    url: '/stub/data/ApiInfoGetSuccess.json', // stub
    method: 'GET',
    header: {},
    params: {},
    data: {},
    mutation: {
      success: 'apiData/SET_LIST',
      error: 'commonData/AXIOS_COMMON_ERROR',
    },
  },

  /**
   * 教師データでのテスト
   */
  /**
   * 請求書データの管理
   */
  /**
   * ログデータの管理
   */
};

export default API_CONFIG;
