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
      console.log("require('../../public/data/administration.json')")
      commit('setAdmins', require('../../public/data/administration.json'))
    },
  },
}
