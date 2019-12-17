import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Company from '../components/Company'
import Portfolio from '../components/Portfolio'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/Company',
            component: Company
        },
        {
            path: '/Portfolio',
            component: Portfolio
        }
    ]
})
