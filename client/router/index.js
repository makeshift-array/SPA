import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'
import Home from 'components/Home'
import Auth from 'components/Auth'
import Login from 'components/auth/Login'
import Register from 'components/auth/Register'
import Dashboard from 'components/Dashboard'
import Profile from 'components/Profile'
import Error404 from 'components/errors/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/auth', name: 'auth', component: Auth,
      children: [
        { path: 'register', name: 'auth.register', component: Register },
        { path: 'login', name: 'auth.login', component: Login }
      ]
    },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
    { path: '*', name: 'error404', component: Error404 }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthorized = await store.dispatch('auth/authorize')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthorized) {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    // Guard against false positive urls.
    // e.g. We don't want to be able to see the login page if we are already logged in.
    if (isAuthorized && to.matched.some(record => ['auth'].includes(record.name))) {
      return next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
