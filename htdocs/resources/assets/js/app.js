
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

import * as Core from './common/core/app';
import * as Api from './common/core/apiConfig';
import * as Lib from './common/ext/functions';

const myToken = Lib.getToken();
Core.log('myToken: ' + myToken);

window.Vue = require('vue');
Vue.use(VueRouter);

/**
 * router config
 */
const routes = [
  { path: '/login', component: require('./components/Login.vue') },
  { path: '/', component: require('./components/Dashboard.vue'), meta:{ requiresAuth: true } }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // ヘッダーにトークンセット
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + myToken;

  // 認証チェックが必要な場合
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 認証状態確認
    Core.log('[auth] 認証状態を確認します');

    if(myToken !== undefined || myToken !== '') {
      // 自分の情報取得
      axios({
				method : 'GET',
        url    : Api.API_ENDPOINT_LIST['auth']
			})
			.then(function(res) {
				Core.log('[axios] success');
				Core.log(res.data);

				if(res.status === 200) {
          next();
				}
			})
			.catch(function(err) {
				Core.log('[axios] error');
        Core.log(err);

        Lib.logout();
      });
    } else {
      Lib.logout();
    }

  } else {
    next();
  }


});

/**
 * mount app
 */
const app = new Vue({
  el: '#app',
  router
});
