import Vue from 'vue'
import App from './app'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
