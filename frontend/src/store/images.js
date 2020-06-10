import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
    async loadImages({ commit }, array) {
      const ids = array

      return axios.post('/files/images', { ids }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        return data
      }).catch(() => {})
    },
  },
}
