import Vue from 'vue'
import VueRouter from 'vue-router'

import authorization from './hooks/authorization'

import About from './modules/About'
import Study from './modules/Study'
import Student from './modules/Student'
import News from './modules/News'
import Library from './modules/Library'
import Entrants from './modules/Entrants'
import Admin from './modules/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Main'),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home'),
      },
      ...About,
      ...Study,
      ...Student,
      ...News,
      ...Library,
      ...Entrants,
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/views/Contacts'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminPanel'),
    meta: {
      requiresAuth: true,
    },
    children: [
      ...Admin,
    ],
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/SignIn'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(authorization)

export default router
