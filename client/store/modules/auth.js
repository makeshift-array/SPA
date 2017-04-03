import router from '../../router'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    authenticated: false,
    user: {}
  },
  getters: {},
  actions: {
    register({ commit }, payload) {
      axios.post('/auth/register', payload)
        .then(data => commit('register', data.data))
        .catch(err => console.log('Error registering user:', err))
    },

    login({ commit }, payload) {
      axios.post('/auth/login', payload)
        .then(data => commit('login', data.data))
        .catch(err => console.log('Error logging user in:', err))
    }
  },
  mutations: {
    register(state, payload) {
      console.log('register', payload)
    },
    login(state, payload) {
      if (payload.status === 'success') {
        state.authenticated = true
        state.user = { ...state.user, ...payload.details }
        localStorage.token = payload.details.token

        router.push('/dashboard')
      } else {
        // failed to login
      }
    },
    logout(state, payload) {
      state.authenticated = false
      localStorage.token = null
      router.push('/')
    }
  }
}
