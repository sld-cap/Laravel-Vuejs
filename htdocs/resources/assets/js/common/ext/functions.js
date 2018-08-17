import * as Core from '../core/app';
import 'jquery.cookie';

const TOKEN_OPTION = {
  expires: 365,
  path: '/',
  domain: '',
  secure: false
};

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

  if(token !== undefined || token !== "") {
    location.href = '/';
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
export function logout() {
  Core.log('[logout]');
  delToken();
  location.href = '/login';
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
  logout();
}

/**
 * お問い合わせアラート表示
 */
export function alertVendorEscalation(errorCode) {
  alert(`アプリケーションエラーが発生しました（code: ${errorCode}）。\nエラーが続く場合、お問い合わせください。`);
}
