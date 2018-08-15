const API_CONFIG = {
  /**
   * システム共通
   */
  // ログイン
  login: {
    url: '/api/authenticate',
    method: 'POST',
    data: {},
  },
  // ログアウト
  logout: {
    url: '',
    method: 'GET',
    params: {},
  },
  // 自分の情報
  auth: {
    url: '/api/v1/me',
    method: 'GET',
  },
  /**
   * CAP管理画面
   */

  /**
   *  コーパス管理画面
   */
  // コーパス情報取得
  getCorpus: {
    url: '/api/v1/corpus/{corpusId}',
    method: 'GET',
    params: {},
  },
  // コーパス情報更新
  saveCorpusInfo: {
    // url: '/api/v1/corpus',
    url: '/stub/data/setCorpusInfo.json',
    method: 'POST',
    data: {},
  },
  // 教師データ一覧取得
  getTrainingData: {
    url: '/api/v1/training-data/{training_datum}',
    method: 'GET',
    params: {},
  },
  // 教師データ追加
  addTrainingData: {
    // url: '/api/v1/training-data',
    url: '/stub/data/setTrainingData.json',
    method: 'POST',
    data: {},
  },
  // 教師データ編集
  saveTrainingData: {
    // url: '/api/v1/training-data',
    url: '/stub/data/setTrainingData.json',
    method: 'POST',
    data: {},
  },
  // 教師データアップロード
  uploadTrainingData: {
    url: '/stub/data/setTrainingData.json',
    method: 'POST',
    data: {},
  },
  // クリエイティブデータ登録
  // addCreative: {
  //   url: '/api/v1/training-data/{training_datum}',
  //   method: 'POST',
  //   data: {},
  // },
};

export default API_CONFIG;
