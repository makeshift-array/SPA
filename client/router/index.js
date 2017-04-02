import Vue from 'vue'
import VueRouter from 'vue-router'
import { authorize } from '../util/auth'
import Home from '../components/Home'
import Auth from '../components/Auth'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import Error404 from '../components/errors/404'

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
        { path: 'register', name: 'register', component: Register },
        { path: 'login', name: 'login', component: Login }
      ]
    },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/profile', name: 'profile', component: Profile, meta: { requiresAuth: true } },
    { path: '*', name: 'error404', component: Error404 }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    authorize()
      .then(authorized => {
        if (!authorized) {
          next({
            path: '/auth/login',
            query: { redirection: to.fullPath }
          })
        } else {
          next()
        }
      })
      .catch(err => console.log('Error authorizing user:', err))
  } else {
    next()
  }
})

export default router
