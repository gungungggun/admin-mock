import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Top from '@/pages/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Top',
      component: Top
    }
  ]
})
