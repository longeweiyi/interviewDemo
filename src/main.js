// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
require('../mock/mock.js')

import axios from 'axios'
window.axios = axios

Vue.mixin({
  methods: {
    jump (path) {
      this.$router.push(path);
    },
    back () {
      this.$router.go(-1);
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
