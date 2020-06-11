import Vue from 'vue'

// Filters
import addZero from '@/filters/addZero.filter'
import dateFormat from '@/filters/dateFormat.filter'
import term from '@/filters/term.filter'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from './tools/axios'
import accessTokenExpired from './tools/accessTokenExpired'
import accessTokenHeader from './tools/accessTokenHeader'

accessTokenExpired(axios, store)
accessTokenHeader(axios, store)

Vue.config.productionTip = false

Vue.filter('addZero', addZero)
Vue.filter('dateFormat', dateFormat)
Vue.filter('term', term)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
