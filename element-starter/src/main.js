import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router/router'
import axios from './axios/axios'
import Mock from './mock/mock'
import * as filters from './util/filter' //import * as obj from "xxx" 会将 "xxx" 中所有 export 导出的内容组合成一个对象返回

Vue.use(ElementUI)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
})
