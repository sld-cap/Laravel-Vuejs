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
