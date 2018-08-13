
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

/**
 * 共通処理
 */
import * as Core from './common/core/app';
import * as Ajax from './common/core/ajax';
import * as Lib from './common/ext/functions';
import ApiConfig from './common/core/apiConfig';
import store from './common/core/store';

/**
 * component
 */
import LoginVue from './components/Login.vue';
import DashboardVue from './components/Dashboard.vue';

import CorpusadminVue from './components/corpusadmin/index.vue';
import CorpusadminBaseInfoVue from './components/corpusadmin/baseInfo/Main.vue';
import CorpusadminDataManageVue from './components/corpusadmin/dataManage/Main.vue';
import CorpusadminTrainingManageVue from './components/corpusadmin/trainingManage/Main.vue';

import VuexVue from './components/corpusadmin/vuex/Main.vue';

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

/**
 * router config
 */
const routes = [
  { path: '/login', component: LoginVue },
  { path: '/', component: DashboardVue, meta: { requiresAuth: true } },
  { path: '/corpus', component: DashboardVue, meta: { requiresAuth: true } },
  {
    path: '/corpus/:corpusId',
    meta: { requiresAuth: true },
    props: route => ({ corpusId: parseInt(route.params.corpusId, 10) }),
    component: CorpusadminVue,
    children: [
      {
        name: 'base-info',
        path: 'data',
        component: CorpusadminBaseInfoVue,
      },
      {
        name: 'data-view',
        path: 'data/view',
        component: CorpusadminDataManageVue,
      },
      {
        name: 'training',
        path: 'training',
        component: CorpusadminTrainingManageVue,
      },
    ],
  },
  // vuex検証
  { path: '/vuex/:corpusId', component: VuexVue, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

/**
 * 画面アクセス制限
 */
const myToken = Lib.getToken();
router.beforeEach((to, from, next) => {
  // ヘッダーにトークンセット
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + myToken;

  // 認証チェックが必要な場合
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 認証状態確認
    Core.log('[auth] 認証状態を確認します');

    if (myToken !== undefined || myToken !== '') {
      // ログインユーザの情報確認
      const apiOption = Object.assign({}, ApiConfig['auth']);
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
