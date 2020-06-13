import axios from '../tools/axios'

export default {
  namespaced: true,

  state: {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    authorized: !!localStorage.getItem('refreshToken'),
    // accessToken: null,
    // refreshToken: null,
    // authorized: !!localStorage.getItem('refreshToken'),
  },

  getters: {
    // authorized: (state) => !!state.refreshToken,
    authorized: (state) => state.authorized,
    accessToken: (state) => state.accessToken,
    refreshToken: (state) => state.refreshToken,
  },
  
  mutations: {
    setAccessToken(state, token) {
      localStorage.setItem('accessToken', token)
      state.accessToken = token
    },
    setRefreshToken(state, token) {
      localStorage.setItem('refreshToken', token)
      state.refreshToken = token
    },
    setAuthorized(state, authorized) {
      state.authorized = authorized
    },
  },
  
  actions: {
    async signIn({ commit }, { login, password }) {
      const res = await axios.post('/auth/signIn', {
        login,
        password,
      })
  
      const { data } = res
  
      if (data.errors) {
        return Promise.reject(data.errors)
      }
  
      const { access, refresh } = data.tokens
  
      commit('setAccessToken', access)
      commit('setRefreshToken', refresh)
      commit('setAuthorized', true)
  
      return Promise.resolve()
    },

    async logOut({ commit, state }) {
      const data = await axios.post('/auth/logOut', {
        token: state.refreshToken,
      })
  
      if (data.errors) {
        return Promise.reject(data.errors)
      }

      localStorage.clear()
      commit('setAuthorized', false)
  
      return Promise.resolve()
    },

    async refresh({ commit, state }) {
      const res = await axios.post('/auth/refresh', {
        token: state.refreshToken,
      })

      const { data } = res

      if (data.errors) {
        commit('setAuthorized', false)
        return Promise.reject(data.errors)
      }

      const { access, refresh } = data.tokens

      commit('setAccessToken', access)
      commit('setRefreshToken', refresh)
      commit('setAuthorized', true)

      return Promise.resolve()
    },

    async changePassword({ commit }, { login, password, newPassword }) {
      const res = await axios.post('/auth/changePassword', {
        login,
        oldPassword: password,
        newPassword,
      })
  
      const { data } = res
  
      if (data.errors) {
        return Promise.reject(data.errors)
      }
  
      return Promise.resolve()
    },
  },
}
