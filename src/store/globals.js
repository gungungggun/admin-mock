const globals = {
  state: {
    test: ''
  },
  mutations: {
    getGlobals (state, response) {
      state.test = ''
    }
  },
  actions: {
    async getGlobals ({ commit }, params) {
      commit('getGlobals')
    }
  }
}

export default globals
