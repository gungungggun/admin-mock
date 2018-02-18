import Vue from 'vue'
import Vuex from 'vuex'
import Store from 'store'
import globals from './globals'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
    login (state, response) {
      // axios.defaults.headers.Authorization = 'Bearer ' + response
      Store.set('jwt', response)
    },
    logout (state, response) {
      Store.remove('jwt')
    }
  },
  actions: {
    async login ({ commit }, param) {
      commit('login', param)
    },
    async logout ({ commit }, param) {
      let response = 'logout'
      commit('logout', response)
    }
  },
  modules: {
    globals: globals
  }
})

export default store
