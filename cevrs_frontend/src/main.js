// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import App from './App'
import router from './router'
import Api from './api/index.js'
import axios from 'axios'
import bkMagic from 'bk-magic-vue'
import 'bk-magic-vue/dist/bk-magic-vue.min.css'
import qs from 'qs'
import store from './store'
import echarts from 'echarts'


function getCookie(name) {
  var reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }else {
    return null
  }
}

axios.defaults.withCredentials  = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['X-CSRFToken'] = getCookie('csrftoken')
axios.defaults.headers.put['X-CSRFToken'] = getCookie('csrftoken')
axios.defaults.headers.patch['X-CSRFToken'] = getCookie('csrftoken')
axios.defaults.headers.delete['X-CSRFToken'] = getCookie('csrftoken')
Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(bkMagic)
Vue.use(VueRouter)
Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
