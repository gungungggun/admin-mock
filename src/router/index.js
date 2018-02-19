import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Store from 'store'
import Login from '@/pages/Login'
import Top from '@/pages/Top'

const jwt = Store.get('jwt')
let auth = false
if (jwt != null) {
  auth = true
}

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
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
      component: Top,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth) {
      next({ path: '/login' })
    }
  } else {
    if (auth) {
      next({ path: '/' })
    }
  }
  next()
})

export default router
