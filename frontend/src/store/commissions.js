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
    async loadCommissions({ commit, dispatch }) {
      // commit('setCommissions', require('../../public/data/commissions.json'))

      axios.get('/structure/commissions').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        data.commissions.forEach(async (element) => {
          element.elementId = element._id

          try {
            element.events = await dispatch('news/loadNewsByOptionalTags',
              { tags: [element._id], number: 3 },
              { root: true })
          } catch (error) {
            element.events = null
          }
        })

        commit('setCommissions', data)

        return Promise.resolve()
      }).catch(() => {})
    },
  },
}
