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

/**
 * ファイルダウンローダー
 */
export function execFileDownload(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
}

/**
 * 経過時間算出
 */
export function elapsedTime(dateTime) {
  const now = new Date().getTime();
  const from = new Date(dateTime).getTime();
  const diff = now - from;
  const elapsed = new Date(diff);

  const diffFullYear = elapsed.getUTCFullYear();
  const diffMonth = elapsed.getUTCMonth();
  const diffDate = elapsed.getUTCDate();
  const diffHours = elapsed.getUTCHours();
  const diffMinutes = elapsed.getUTCMinutes();
  const diffSeconds = elapsed.getUTCSeconds();

  Core.log(`FullYear: ${diffFullYear}|Month: ${diffMonth}|Date: ${diffDate}|Hours: ${diffHours}|Minutes: ${diffMinutes}|Seconds: ${diffSeconds}`);

  let res = dateTime;
  if (diffFullYear - 1970 > 0 || diffMonth >= 3) {
    res = '3ヶ月以上前';
  } else if (diffMonth > 0) {
    res = `${diffMonth}ヶ月前`;
  } else if (diffDate - 1 > 0) {
    res = `${diffDate}日前`;
  } else if (diffHours > 0) {
    res = `${diffDate}時間前`;
  } else if (diffMinutes > 0) {
    res = `${diffMinutes}分前`;
  } else {
    res = `${diffSeconds}秒前`;
  }
  return res;
}

/**
 * コーパスカードで表示する説明文を2行に調整
 */
export function adjastCorpusCardDescriptionRowsResize(classname) {
  let timer = false;
  $(window).resize(function() {
    // タイマーによって、リサイズ単位毎に関数が実行され、重くなるのを防ぐ
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      $(`.${classname}`).each(function() {
        const $target = $(this);
        let rest;
        // 以前にリサイズしたか(document.readyで必ず<p class="three-dots-card-rest">
        // は存在するのでこの条件文はtrueを返すが、念のため)
        if ($target.next().hasClass(`${classname}-rest`)) {
          // 省略していた文章を取得
          rest = $target.next().html();
          // 省略していた文章が空ではなかったとき、本文には３点リーダーが表示されて
          // いるので、その３文字を削除
          if (rest !== '') {
            $target.html($target.html().slice(0, -3)); // 末尾の...を削除
          }
          // これがないと永遠に<p class="three-dots-card-rest">が増えていく
          $target.next().remove();
        } else {
          rest = '';
        }

        // オリジナルの文章を復元
        let html = $target.html() + rest;
        // 対象の要素を、高さにautoを指定し非表示で複製する
        // 方針としては、このクローン(オリジナルの文章を保持)を非表示でブラウザに配置させ、
        // クローンの文字消去と元のボックスとの高さ比較を行うことによって、
        // クローンが元のボックスと同様の高さになったときの文章で差し替える
        const $clone = $target.clone();
        $clone.html(html);
        $clone.css({
          display: 'none',
        }).width($target.width()).height('auto');

        // 目印クラスをつけて
        // DOMを追加 (これにより高さを獲得)
        $clone.addClass(`${classname}-rest`);
        $target.after($clone);

        rest = '';
        // 指定した高さになるまで、1文字ずつ消去していくと同時に、
        // 文章が完全消去されないように rest に退避させておく
        while ((html.length > 0) && ($clone.height() > $target.height())) {
          rest = html.substr(html.length - 1, 1) + rest;
          html = html.substr(0, html.length - 1);
          $clone.html(`${html}...`); // 高さ更新
        }

        // 文章差し替え
        // rest が空っぽということは、三点リーダーを表示する必要がないということ
        if (rest == "") {
          $target.html(html);
        } else {
          $target.html(`${html}...`);
        }
        // 次のリサイズ用に次の要素に残りの文章を入れておく
        $clone.html(rest);
      });
    }, 100);
  });
}

export function adjastCorpusCardDescriptionRows(classname) {
  $(`.${classname}`).each(function() {
    const $target = $(this);
    let rest = '';

    // オリジナルの文章を取得
    let html = $target.html();

    // 対象の要素を、高さにautoを指定し非表示で複製する
    const $clone = $target.clone();
    $clone.css({
      display: 'none',
    }).width($target.width()).height('auto');

    // 目印クラスをつけて
    // DOMを追加
    $clone.addClass(`${classname}-rest`);
    $target.after($clone);

    // 指定した高さになるまで、1文字ずつ消去していく
    while ((html.length > 0) && ($clone.height() > $target.height())) {
      rest = html.substr(html.length - 1, 1) + rest;
      html = html.substr(0, html.length - 1);
      $clone.html(`${html}...`); // 高さ更新
    }

    // 文章差し替え
    if (rest == '') {
      $target.html(html);
    } else {
      $target.html(`${html}...`);
    }
    // リサイズ用に次の要素に残りの文章を入れておく
    $clone.html(rest);
  });
  // リサイズした時のイベント
  adjastCorpusCardDescriptionRowsResize(classname);
}
