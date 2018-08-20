import * as Core from './app';
import * as Lib from '../ext/functions';

/**
 * axiosによる非同期通信
 */
export function exec(option, commit, mutation, eMutation) {
  axios(option).then((res) => {
    // commit
    Core.log('[axios] success');
    Core.log(res);

    commit(mutation, res.data);
  }).catch((err) => {
    // error
    Core.log('[axios] faild...');
    Core.log(err);

    if (eMutation !== undefined && eMutation !== '') {
      commit(eMutation);
    }

    // Todo: エラー周りはもう少しなんとかしたい
    if (eMutation !== 'setLoginError') {
      Lib.alertAxiosError();
    }
  });
}

/**
 * ログインユーザの情報確認
 * 同期的に取得
 */
export async function checkStatus(option) {
  Core.log('[checkStatus]');
  return await axios.get(option.url);
}
