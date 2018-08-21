export const DEBUG_MODE = true;

/**
 * ログ確認用
 */
export function log(msg) {
  if(DEBUG_MODE) {
    console.log(msg);
  }
}

/**
 * 定数
 */
export const CorpusDataType = {
  0: {
    label: 'テストデータ',
  },
  1: {
    label: '学習データ',
  },
};

export const CorpusLanguage = {
  0: {
    label: '日本語',
  },
  1: {
    label: '英語',
  },
};

export const CorpusType = {
  1: {
    label: '自然言語',
  },
  2: {
    label: '画像',
  },
};

export const CorpusStateType = {
  0: {
    status: '本番稼働中',
    availableMsg: '完了済み',
  },
  1: {
    status: '注意：教師データなし',
    availableMsg: '学習不可',
  },
  2: {
    status: '注意：学習未実行',
    availableMsg: '学習可能',
  },
  3: {
    status: '注意：学習中',
    availableMsg: '学習中...',
  },
  4: {
    status: '注意：本番反映未実行',
    availableMsg: '完了済み',
  },
  9: {
    status: '注意：コーパスの登録不備',
    availableMsg: '学習可能',
  },
};
