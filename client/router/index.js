import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/profile', name: 'profile', component: Profile }
  ]
})
