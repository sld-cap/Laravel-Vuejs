
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';


require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

/**
 * router config
 */
const routes = [
  { path: '/login', component: require('./components/Login.vue') },
  { path: '/', component: require('./components/Dashboard.vue') }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});


/**
 * mount app
 */
const app = new Vue({
  el: '#app',
  router
});
