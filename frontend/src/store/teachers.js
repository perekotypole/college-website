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
    loadAdmins({ commit }) {
      commit('setAdmins', require('../../public/data/administration.json'))
    },
  },
}
