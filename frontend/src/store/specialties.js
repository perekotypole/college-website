import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    specialties: [],
    programIDs: [
      {
        specialty: '5ec66af2c134282d7469d8a8',
        docs: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60', '5ed51fe6d4cd813fcc566e61'],
      },
      {
        specialty: '5ed6b88df3861232188e272d',
        docs: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60', '5ed51fe6d4cd813fcc566e61'],
      },
      {
        specialty: '5ed6c34a97d3c228b83b189c',
        docs: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60', '5ed51fe6d4cd813fcc566e61'],
      },
    ],
    programs: [],
  },

  getters: {
    list: (state) => state.specialties,
    programs: (state) => state.programs,
  },

  mutations: {
    setSpecialties(state, specialties) {
      state.specialties = specialties
    },
    setPrograms(state, programs) {
      state.programs = programs
    },
  },

  actions: {
    async loadSpecialties({ commit }) {
      return axios.get('/structure/specialties').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        data.departments.forEach((element) => {
          element.opened = false
        })

        commit('setSpecialties', data)

        return data
      }).catch(() => {})
    },
    async loadPrograms({
      commit, dispatch, state,
    }) {
      const program = await dispatch('loadSpecialties')
      
      const { programIDs } = state

      if (program.departments) {
        program.departments.forEach((dep) => {
          dep.specialties.forEach((spec) => {
            spec.program = []

            programIDs.forEach(async (element) => {
              if (element.specialty === spec._id) {
                try {
                  const { documents } = await dispatch('documents/loadDocuments',
                    element.docs,
                    { root: true })

                  spec.program = documents
                } catch (error) {
                  spec.program = null
                }
              }
            })
          })
        })
      }

      console.log(program)
      commit('setPrograms', program)
    },
  },
}
