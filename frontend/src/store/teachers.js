import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    admins: [],
  },

  getters: {
    admins: (state) => state.admins,
  },

  mutations: {
    setAdmins(state, admins) {
      state.admins = admins
    },
  },

  actions: {
    async loadAdmins({ commit }) {
      // commit('setAdmins', require('../../public/data/administration.json'))

      axios.get('/structure/admins').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setAdmins', data)

        return Promise.resolve()
      }).catch(() => {})
    },
  },
}
