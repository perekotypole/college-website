import Vue from 'vue'
import Vuex from 'vuex'

import teachers from './teachers'
import commissions from './commissions'
import news from './news'
import specialties from './specialties'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    teachers,
    commissions,
    news,
    specialties,
  },
})
