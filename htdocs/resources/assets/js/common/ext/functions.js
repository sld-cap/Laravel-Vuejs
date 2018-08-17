import * as Core from '../core/app';
import 'jquery.cookie';

const TOKEN_OPTION = {
  expires: 365,
  path: '/',
  domain: '',
  secure: false
};

/**
 * クエリ文字列取得
 */
export function getUrlQuery() {
  if (location.search.length > 1) {
    const query = location.search.substring(1);
    const parameters = query.split('&');

    const result = {};
    for (let i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      const element = parameters[i].split('=');

      const paramName = decodeURIComponent(element[0]);
      const paramValue = decodeURIComponent(element[1]);

      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = decodeURIComponent(paramValue);
    }
    return result;
  }
  return null;
}

/**
 * クッキーにトークンセット
 */
export function setToken(token) {
  Core.log('setToken');
  Core.log(`[setToken] ${token}`);
  $.cookie('CAP-TOKEN', token, TOKEN_OPTION);
}

/**
 * トークン取得
 */
export function getToken() {
  Core.log('[getToken]');
  return $.cookie('CAP-TOKEN');
}

/**
 * クッキーからトークン削除
 */
export function delToken() {
  Core.log('[delToken]');
  $.cookie('CAP-TOKEN', '', { expires: -1, path: '/' });
}

/**
 * ログイン
 */
export function login() {
  Core.log('[login]');
  const token = getToken();

  if (token !== undefined || token !== '') {
    const query = getUrlQuery();
    let path = '/';
    if (query !== null && query.redirect !== undefined) {
      path = query.redirect;
    }
    location.href = path;
  } else {
    logout();
  }
}


/**
 * 認証状態確認
 */
export function isAuth() {
  Core.log('[isAuth]');
  const token = getToken();

  if(token !== undefined || token !== "") {
    // ***
  } else {
    logout();
  }
}

/**
 * ログアウト
 */
export function logout(redirectPath) {
  Core.log('[logout]');
  delToken();
  
  let path = '/login';
  if (redirectPath !== undefined) {
    path += '?redirect=' + redirectPath;
  }
  location.href = path;
}

/**
 * スクロールトップ
 */
export function setScrollTop() {
  $('html, body').scrollTop(0);
}


/**
 * 通信エラーアラート表示
 */
export function alertAxiosError() {
  alert('通信エラーが発生しました。再度、画面読み込みを行ってください。\nエラーが続く場合、お問い合わせください。');
}

/**
 * 認証エラーアラート表示
 */
export function alertRefreshToken() {
  alert('認証切れが発生しました。再ログインを行なった上で、再度操作を行ってください。');

  const currentPath = location.pathname;
  logout(currentPath);
}

/**
 * お問い合わせアラート表示
 */
export function alertVendorEscalation(errorCode) {
  alert(`アプリケーションエラーが発生しました（code: ${errorCode}）。\nエラーが続く場合、お問い合わせください。`);
}
