import Vue from 'vue'
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
    calendar: [],
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

    calendar: (state) => state.calendar,
    calendarByDay: (state) => {
      let res = []
      state.calendar.forEach((item) => {
        let day = new Date(item.publicationDate).getDate()
       
        if (!res[day]) {
          res[day] = []
        }
        
        res[day].push(item)
      })

      return res
    },
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

    updateCalendar(state, news) {
      state.calendar = news
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

        return Promise.resolve()
      }).catch(() => {})
    },

    async deleteNews({ dispatch }, id) {
      return axios({
        method: 'delete',
        url: '/news',
        data: {
          id,
        },
      }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        // dispatch('loadNews')
        // dispatch('loadSlider', 3)
        // dispatch('loadNewsNumber')

        return data
      }).catch(() => {})
    },

    // async loadNewsByDate({ commit }, { from, to }) {
    //   let resp = await axios.post('/news/list', {
    //     date: {
    //       from, 
    //       to,
    //     },
    //   })

    //   if (resp.errors) {
    //     return Promise.reject(res.errors)
    //   }

    //   return res.data
    // },

    async loadCalendarNews({ commit }, { month, year }) {
      function daysInMonth(m, y) {
        return new Date(y, m, 0).getDate()
      }

      try {
        let resp = await axios.post('/news/list', {
          date: {
            from: `${year}-${month}-01`,
            to: `${year}-${month}-${daysInMonth(month, year)}`,
          },
        })
    
        if (resp.errors) {
          return Promise.reject(resp.errors)
        }

        commit('updateCalendar', resp.data.news)    
      } catch {
        console.error('Something went wrong')        
      }

      return 0
    },
  },
}
