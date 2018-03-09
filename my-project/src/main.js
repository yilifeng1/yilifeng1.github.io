// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'

// css
import 'element-ui/lib/theme-chalk/index.css'
// js
import * as actions from './util/actions'

// 第三方插件
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false

const store = new Vuex.Store({
  actions
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  http: { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
})
