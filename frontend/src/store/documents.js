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
    async loadDocuments({ commit }, array) {
      const ids = array

      return axios.post('/files/docs', { ids }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        return data
      }).catch(() => {})
    },
  },
}
