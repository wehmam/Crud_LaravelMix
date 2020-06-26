/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


// import vue agar bisa digunakan
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import Create from './components/Create.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create }
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

  const app = new Vue({
    router
  }).$mount('#app')

  