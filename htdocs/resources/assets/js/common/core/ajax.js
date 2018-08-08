import * as Core from './app';
import * as Lib from '../ext/functions';

/**
 * axiosによる非同期通信
 */
export function exec(option, commit, mutation) {
  axios(option).then((res) => {
    // commit
    Core.log('[axios] success');
    Core.log(res);
    // if(res.data.code === '200' || res.data.code === '202') {
    commit(mutation, res.data);
    // } else {
    //   commit('setError', res.data.data);
    // }
  }).catch((err) => {
    // error
    Core.log('[axios] faild...');
    Core.log(err);
  });
}

/**
 * ログイン
 */
export function login(option) {
  axios(option).then((res) => {
    Core.log('[login] success');
    Core.log(res.data);

    if (res.status === 200) {
      // cookieにトークンセット
      Lib.setToken(res.data.token);
      // ダッシュボードにログイン
      Lib.login();
    }
  }).catch((err) => {
    Core.log('[login] error');
    Core.log(err);

    alert('ログインできませんでした');
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
