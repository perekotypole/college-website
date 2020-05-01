import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './modules/About'
import Study from './modules/Study'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/layouts/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home'),
      },
      ...About,
      ...Study,
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
