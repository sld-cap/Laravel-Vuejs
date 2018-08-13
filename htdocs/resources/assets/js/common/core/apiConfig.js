const API_CONFIG = {
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
  // コーパス情報取得
  getCorpus: {
    url: '/api/v1/corpus/{corpusId}',
    method: 'GET',
    params: {},
  },
  // トレーニングデータ取得
  getTrainingData: {
    url: '/api/v1/training-data/{training_datum}',
    method: 'GET',
    params: {},
  },
  // トレーニングデータ追加
  addTrainingData: {
    url: '/api/v1/training-data',
    method: 'POST',
    data: {},
  },
  // クリエイティブデータ登録
  addCreative: {
    url: '/api/v1/training-data/{training_datum}',
    method: 'POST',
    data: {},
  },
};

export default API_CONFIG;
