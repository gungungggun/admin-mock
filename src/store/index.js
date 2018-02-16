import Vue from 'vue'
import Vuex from 'vuex'
import Store from 'store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
    login (state, response) {
      // axios.defaults.headers.Authorization = 'Bearer ' + response
      Store.set('jwt', response)
    }
  },
  actions: {
    async login ({ commit }, param) {
      let response = 'login'
      commit('login', response)
    }
  },
  modules: {
  }
})

export default store
