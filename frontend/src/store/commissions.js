import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    commissions: [],
  },

  getters: {
    list: (state) => state.commissions,
  },

  mutations: {
    setCommissions(state, commissions) {
      state.commissions = commissions
    },
  },

  actions: {
    async loadCommissions({ commit }) {
      // commit('setCommissions', require('../../public/data/commissions.json'))

      axios.get('/structure/commissions').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setCommissions', data)

        return Promise.resolve()
      }).catch(() => {})
    },
  },
}
