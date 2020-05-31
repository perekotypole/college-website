import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    slider: [],
    news: [],
  },

  getters: {
    slider: (state) => state.slider,
    news: (state) => state.news,
  },

  mutations: {
    setSlider(state, slider) {
      state.slider = slider
    },
    setNews(state, news) {
      state.news = news
    },
  },

  actions: {
    async loadSlider({ commit }, number) {
      // commit('setSlider', require('../../public/data/slider.json'))

      axios.get(`/news/slider/${number}`).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setSlider', data)

        return Promise.resolve()
      }).catch(() => {})
    },
    async loadNews({ commit }, number) {
      axios.post('/news/list').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setNews', data)

        return Promise.resolve()
      }).catch(() => {})
    },
  },
}
