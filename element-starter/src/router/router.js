import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Seting from '../components/Seting.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/home',
            name: 'home',
            component: Home
        },
        {
            path: '/seting',
            name: 'seting',
            component: Seting 
        }
    ]
})