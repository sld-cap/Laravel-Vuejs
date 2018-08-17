
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';

/**
 * 共通部品読み込み
 */
import * as Core from './common/core/app';
import * as Ajax from './common/core/ajax';
import * as Lib from './common/ext/functions';
import ApiConfig from './common/core/apiConfig';
import store from './common/core/store/index';
import routes from './common/core/route';

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(VueLoaders);


/**
 * router
 */
const router = new VueRouter({
  mode: 'history',
  routes,
});

/**
 * 画面アクセス制限
 */
router.beforeEach((to, from, next) => {
  // 認証チェックが必要な場合
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 認証状態確認
    Core.log('[auth] 認証状態を確認します');

    const myToken = Lib.getToken();
    if (myToken !== undefined || myToken !== '') {
      // ログインユーザの情報確認
      // const apiOption = Object.assign({}, ApiConfig['auth']);
      const apiOption = Object.assign({}, ApiConfig.auth);
      Ajax.checkStatus(apiOption).then((res) => {
        Core.log('[auth] success');
        Core.log(res);
        if (res.status === 200 && res.data.user !== undefined) {
          CapApp.$data.me = res.data.user;
          next();
        } else {
          Lib.logout();
        }
      }).catch((err) => {
        Core.log('[auth] error');
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
const CapApp = new Vue({
  el: '#app',
  router,
  store,
  data() {
    return {
      me: {},
    };
  },
});
