import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './modules/About'
import Study from './modules/Study'
import Student from './modules/Student'
import Library from './modules/Library'
import Entrants from './modules/Entrants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Main'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home'),
      },
      ...About,
      ...Study,
      ...Student,
      ...Library,
      ...Entrants,
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/Contacts'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
