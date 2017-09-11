import Vue from 'vue'
import Router from 'vue-router'

import index from '../page/index.vue'
import Home from '../page/Home.vue'
import Seting from '../page/Seting.vue'
import login from '../page/login.vue'
import forum from '../page/forum.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: login
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/seting',
                    name: 'seting',
                    component: Seting
                },
                {
                    path: '/forum',
                    name: 'forum',
                    component: forum
                }
            ]
        } 
    ]
})