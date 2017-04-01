import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/profile', name: 'profile', component: Profile }
  ]
})
