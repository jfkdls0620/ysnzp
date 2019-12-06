import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import SelectPicture from '../components/SelectPicture'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/SelectPicture',
            component: SelectPicture
        }
    ]
})
