import * as Core from './app';
import * as Lib from '../ext/functions';

/**
 * axiosによる非同期通信
 */
export function exec(commit, option) {
  Core.log('[axios]');
  Core.log(option);

  axios(option).then((res) => {
    // commit
    Core.log('[axios] success');
    Core.log(res);
    commit(option.mutation.success, res.data);
  }).catch((err) => {
    // error
    Core.log('[axios] faild...');
    Core.log(err);
    if (option.mutation.error !== undefined && option.mutation.error !== '') {
      commit(option.mutation.error);
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
