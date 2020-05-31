import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    specialties: [],
  },

  getters: {
    list: (state) => state.specialties,
  },

  mutations: {
    setSpecialties(state, specialties) {
      state.specialties = specialties
    },
  },

  actions: {
    async loadSpecialties({ commit }) {
      // commit('setSpecialties', require('../../public/data/specialties.json'))

      axios.get('/structure/specialties').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        data.departments.forEach((element) => {
          element.opened = false
        })

        commit('setSpecialties', data)

        return Promise.resolve()
      }).catch(() => {})
    },
  },
}
