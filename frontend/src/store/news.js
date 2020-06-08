import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    details: {},
    slider: [],
    news: [],
    number: 0,
    tags: [],
    filter: {
      tag: null,
      page: 1,
      number: 5,
      sort: 1,
    },
  },

  getters: {
    slider: (state) => state.slider,

    news: (state) => state.news,
    number: (state) => state.number,

    details: (state) => state.details,

    tags: (state) => state.tags,

    selectTag: (state) => state.filter.tag,
    selectPage: (state) => state.filter.page,
    selectNumber: (state) => state.filter.number,
    selectSort: (state) => state.filter.sort,
  },

  mutations: {
    setSlider(state, slider) {
      state.slider = slider
    },

    setNews(state, news) {
      state.news = news
    },
    setNumber(state, number) {
      state.number = number
    },

    setDetails(state, details) {
      state.details = details
    },

    setTags(state, tags) {
      state.tags = tags
    },

    setSelectTag(state, selectTag) {
      state.filter.tag = selectTag
    },
    setSelectPage(state, selectPage) {
      state.filter.page = selectPage
    },
    setSelectNumber(state, selectNumber) {
      state.filter.number = selectNumber
    },
    setSelectSort(state, selectSort) {
      state.filter.sort = selectSort
    },
  },

  actions: {
    async loadSlider({ commit }, number) {
      axios.get(`/news/slider/${number}`).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setSlider', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async loadNews({ commit, getters }) {
      axios.post('/news/list', {
        tag: getters.selectTag,
        number: getters.selectNumber,
        page: getters.selectPage,
        sort: getters.selectSort,
      }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setNews', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async loadNewsDetails({ commit }, id) {
      axios.get(`/news/${id}`).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setDetails', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async loadNewsNumber({ commit }) {
      axios.get('/news/number').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        commit('setNumber', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async loadTags({ commit }, { all }) {
      axios.get('/news/tags').then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        data.tags.forEach((element) => {
          element.value = element._id
        })

        if (all) data.tags.unshift({ name: 'Всі', value: null })

        commit('setTags', data)

        return Promise.resolve()
      }).catch(() => {})
    },
    
    async setSelectTag({ commit }, tag) {
      commit('setSelectTag', tag)
    },
    async setSelectPage({ commit }, page) {
      commit('setSelectPage', page)
    },
    async setSelectNumber({ commit }, number) {
      commit('setSelectNumber', number)
    },
    async setSelectSort({ commit }, sort) {
      commit('setSelectSort', sort)
    },

    async loadNewsByTag({ commit }, { tag, number, page }) {
      return axios.post('/news/ByTag', { tag, number, page }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }
        
        return data
      }).catch(() => {})
    },

    async loadNewsByOptionalTags({ commit }, { tags, number, page }) {
      return axios.post('/news/ByOptionalTags', { tags, number, page }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }
        
        return data
      }).catch(() => {})
    },

    async createNews({ commit }, news) {
      axios.post('/news', news).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }
        
        return data
      }).catch(() => {})
    },
  },
}
