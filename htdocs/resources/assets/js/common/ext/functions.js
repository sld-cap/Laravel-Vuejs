/**
 * クッキーにトークンセット
 */
export function setToken(token) {
  $.cookie('CAP-TOKEN', token);
}

/**
 * トークン取得
 */
export function getToken() {
  return $.cookie('CAP-TOKEN');
}

/**
 * クッキーからトークン削除
 */
export function delToken() {
  $.removeCookie('CAP-TOKEN');
}

/**
 * ログイン
 */
export function login() {
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
  const token = getToken();

  if(token !== undefined || token !== "") {
    // 自分の情報取得

  } else {
    logout();
  }
}

/**
 * ログアウト
 */
export function logout() {
  delToken();
  location.href = '/login';
}