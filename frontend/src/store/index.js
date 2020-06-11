import Vue from 'vue'
import Vuex from 'vuex'

import teachers from './teachers'
import commissions from './commissions'
import news from './news'
import specialties from './specialties'
import documents from './documents'
import images from './images'
import authorization from './authorization'

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
    documents,
    images,
    authorization,
  },
})
