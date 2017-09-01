import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router/router'
import axios from './axios/axios'
import Mock from './mock/mock'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
})
