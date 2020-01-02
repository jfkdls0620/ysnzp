import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Company from '../components/Company' //회사소개
import People from '../components/People' //사람들
import Portfolio from '../components/Portfolio' //포트폴리오
import Project from '../components/Project' //프로젝트 가이드
import TechnologyList from '../components/TechnologyList' //기술목록
import Request from '../components/Request' //의뢰하기

import Service from '../components/Service' //고객센터
import Employee from '../components/Employee' //사원집
import TechnologyBlog from '../components/TechnologyBlog' //기술 블로그

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
            path: '/People',
            component: People
        },
        {
            path: '/Portfolio',
            component: Portfolio
        },
        {
            path: '/Project',
            component: Project
        },
        {
            path: '/TechnologyList',
            component: TechnologyList
        },
        {
            path: '/Request',
            component: Request
        },
        {
            path: '/Service',
            component: Service
        },
        {
            path: '/Employee',
            component: Employee
        },
        {
            path: '/TechnologyBlog',
            component: TechnologyBlog
        }
    ]
});

