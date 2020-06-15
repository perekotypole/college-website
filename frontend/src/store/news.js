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
      keywords: null,
      tag: null,
      page: 1,
      number: 5,
      sort: 1,
      date: {
        from: null,
        to: null,
      },
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
    fromDate: (state) => state.filter.date.from,
    toDate: (state) => state.filter.date.to,

    calendar: (state) => state.calendar,
    calendarByDay: (state) => {
      let res = []
      state.calendar.forEach((item) => {
        let day = new Date(item.eventDate).getDate()
       
        if (!res[day]) {
          res[day] = []
        }
        
        res[day].push(item)
      })

      return res
    },

    keywords: (state) => state.filter.keywords,
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
    setFromDate(state, date) {
      state.filter.date.from = date
    },
    setToDate(state, date) {
      state.filter.date.to = date
    },
    setKeywords(state, keywords) {
      state.filter.keywords = keywords
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
        date: {
          from: getters.fromDate,
          to: getters.toDate,
        },
        keywords: getters.keywords,
      }).then(({ data }) => {
        if (data.errors) {
          return Promise.reject(data.errors)
        }

        console.log('hello')

        commit('setNews', data)

        return Promise.resolve()
      }).catch(() => {})
    },

    async loadNewsDetails({ commit }, { id, viewsIncrement }) {
      axios.get(`/news/${id}/${viewsIncrement}`).then(({ data }) => {
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
    async setFromDate({ commit }, date) {
      commit('setFromDate', date)
    },
    async setToDate({ commit }, date) {
      commit('setToDate', date)
    },
    async setKeywords({ commit }, keywords) {
      commit('setKeywords', keywords)
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

    async loadCalendarNews({ commit }, { month, year }) {
      function daysInMonth(m, y) {
        return new Date(y, m, 0).getDate()
      }

      try {
        let resp = await axios.post('/news/events', {
          date: {
            from: `${year}-${month}-01`,
            to: `${year}-${month}-${daysInMonth(month, year)}`,
          },
        })
    
        if (resp.errors || resp.data.errors) {
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
