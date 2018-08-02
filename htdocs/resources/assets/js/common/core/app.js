export const DEBUG_MODE = true;

/**
 * ログ確認用
 */
export function log(msg) {
  if(DEBUG_MODE) {
    console.log(msg);
  }
}
