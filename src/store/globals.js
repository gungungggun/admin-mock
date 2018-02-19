const globals = {
  state: {
    theme: '',
    color: '',
    title: '',
    pages: [
      {
        id: 'user',
        name: 'ユーザ管理'
      },
      {
        id: 'blog',
        name: 'ブログ管理'
      }
    ]
  },
  mutations: {
    getGlobals (state, response) {
    }
  },
  actions: {
    async getGlobals ({ commit }, params) {
      commit('getGlobals')
    }
  }
}

export default globals
