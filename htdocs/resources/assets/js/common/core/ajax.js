/**
 * 
 */
export function execAjax(option) {
  return axios(option)
    .then(function(res) {
      return res;
    })
    .catch(function(err) {
      const errRes = {
        code: 999,
        message: '通信に失敗しました'
      };
      return errRes;
    });
}