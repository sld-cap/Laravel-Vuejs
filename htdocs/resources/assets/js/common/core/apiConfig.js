const API_CONFIG = {
  // システム共通
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

  // CAP管理画面
  // コーパス情報取得
  getCorpus: {
    url: '/api/v1/corpus/{corpusId}',
    method: 'GET',
    params: {},
  },
  // コーパス情報更新
  saveCorpusInfo: {
    // url: '/api/v1/corpus',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/corpusEditError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },

  // コーパス管理画面
  // 教師データ一覧取得
  getTrainingData: {
    url: '/api/v1/training-data/{training_datum}',
    method: 'GET',
    params: {},
  },
  // 教師データ追加
  addTrainingData: {
    // url: '/api/v1/training-data',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/TrainingDataAddError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
  // 教師データ編集
  saveTrainingData: {
    // url: '/api/v1/training-data',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/TrainingDataEditError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
  // 教師データ削除
  deleteTrainingData: {
    // url: '/api/v1/training-data/{corpus_id}',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/TrainingDataDeleteError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
  // 教師データアップロード
  uploadTrainingData: {
    // url: '/api/v1/training-data/{corpus_id}/upload',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/TrainingDataUploadError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
    headers: {
      'content-type': 'multipart/form-data',
    },
  },
  // 教師データダウンロード
  downloadTrainingData: {
    // url: '/api/v1/training-data/{corpus_id}/download',
    url: '/stub/data/successData.json', // 処理成功用stub
    // url: '/stub/data/TrainingDataUploadError.json', // 処理失敗用stub
    method: 'POST',
    data: {},
  },
};

export default API_CONFIG;
