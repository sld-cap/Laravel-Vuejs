const API_CONFIG = {
  /**
   * システム共通
   */
  login: { // ログイン
    url: '/api/authenticate',
    method: 'POST',
    data: {},
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
    // url: '/api/v1/corpus',
    url: '/stub/data/CorpusListGetSuccess.json', // 処理成功用stub
    method: 'GET',
    params: {},
  },
  getCorpus: { // コーパス詳細取得
    url: '/api/v1/corpus/{corpusId}',
    method: 'GET',
    params: {},
  },
  addCorpusInfo: { // コーパスの作成
    // url: '/api/v1/corpus',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/CorpusAddError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
  saveCorpusInfo: { // コーパスの編集
    // url: '/api/v1/corpus',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/corpusEditError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
  deleteCorpusInfo: { // コーパスの削除
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'DELETE',
  },

  /**
   * コーパスの学習
   */
  trainingCorpus: { // AI学習の実行
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'POST',
    data: {},
  },
  checkCorpusTrainingDone: { // AI学習が完了したかどうかの確認
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'GET',
  },

  /**
   * コーパスの本番反映
   */
  deployCorpus: {
    // url: '/api/v1/corpus/{corpusId}',
    url: '/stub/data/successData.json', // 処理成功用stub
    method: 'POST',
    data: {},
  },

  /**
   * 教師データの管理
   */
  getTrainingData: { // 教師データ一覧取得
    url: '/api/v1/training-data/{training_datum}',
    method: 'GET',
    params: {},
  },
  addTrainingData: { // 教師データの登録
    url: '/api/v1/training-data',
    method: 'POST',
    data: {},
  },
  saveTrainingData: { // 教師データの編集
    url: '/api/v1/training-data/{creative_id}',
    method: 'PUT',
    data: {},
  },
  deleteTrainingData: { // 教師データの削除
    url: '/api/v1/training-data/{creative_id}',
    method: 'DELETE',
  },
  uploadTrainingData: { // 教師データのアップロード
    url: '/api/v1/training-data/{corpus_id}/upload',
    method: 'POST',
    data: {},
    headers: {
      'content-type': 'multipart/form-data',
    },
  },
  downloadTrainingData: { // 教師データのダウンロード
    url: '/api/v1/training-data/{corpus_id}/download',
    method: 'GET',
    data: {},
  },

  /**
   * アカウントの管理
   */
  getAccountList: { // アカウント一覧取得
    // url: '/api/v1/users',
    url: '/stub/data/AccountListGetSuccess.json',
    method: 'GET',
    data: {},
  },
  addAccount: { // アカウントの作成
    // url: '/api/v1/users',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'POST',
    data: {},
  },
  saveAccount: { // アカウントの編集
    // url: '/api/v1/users',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'POST',
    data: {},
  },
  deleteAccount: { // アカウントの削除
    // url: '/api/v1/users',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/AccountAddError.json', // 処理error用stub
    method: 'POST',
    data: {},
  },

  /**
   * APIデータの管理
   */
  getApiList: { // API一覧取得
    url: '/stub/data/ApiInfoGetSuccess.json',
    method: 'GET',
    data: {},
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
