import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Seting from '../components/Seting.vue'
import login from '../components/login.vue'
import item from '../components/Item.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path:'/home',
            name: 'home',
            component: Home
        },
        {
            path: '/seting',
            name: 'seting',
            component: Seting 
        },
        {
            path: '/item',
            name: 'item',
            component: item
        }
    ]
})