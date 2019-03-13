// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueWechatTitle from 'vue-wechat-title'
import VueClipboard from 'vue-clipboard2'
import store from '@/vuex/store'
import axios from 'axios'
import { AlertPlugin, ToastPlugin, Alert, LoadingPlugin } from 'vux'

import '@/assets/css/reset.css'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Vue.use(VueClipboard)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.prototype.$http = axios
Vue.component('alert', Alert)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
	store,
	components: { App },
  render: h => h(App)
})
