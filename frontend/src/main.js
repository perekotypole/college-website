import Vue from 'vue'

// Filters
import addZero from '@/filters/addZero.filter'
import dateFormat from '@/filters/dateFormat.filter'
import term from '@/filters/term.filter'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('addZero', addZero)
Vue.filter('dateFormat', dateFormat)
Vue.filter('term', term)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
