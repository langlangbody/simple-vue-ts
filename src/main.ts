import Vue from 'vue'
import App from './App'
import router from './route'
import store from './store'
// vuetify
import Vuetify from "vuetify"
import VueContentPlaceholders from 'vue-content-placeholders'
Vue.use(VueContentPlaceholders)
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify,{theme:{
  primary: "#455A64",
  secondary: "#546E7A",
  accent: "#1E88E5",
  error: "#EF5350",
  warning: "#FFC107",
  info: "#03A9F4",
  success: "#4caf50"
}})
import './config/axios-config';

// 注册全局的钩子函数，vue-property-decorator要求这么写的
import { Component } from 'vue-property-decorator'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)

Vue.config.productionTip = false
Vue.config.devtools = true
// 全局样式
import './assets/css/rest.scss'

// 使用axios
// 开发模式下使用mock数据
if (process.env.NODE_ENV === 'development') {
  require('./config/axios-mock')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例。
// Vue.config.errorHandler = function (err, vm, info) {
//   console.error('错误信息',info);
// }
