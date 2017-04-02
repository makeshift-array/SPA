import axios from 'axios'

export default {
  namespaced: true,
  state: {
    authenticated: false
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
    },

    logout({ commit }) {
      axios.post('/auth/logout', payload)
        .then(() => commit('logout'))
        .catch(err => console.log('Error logging user out:', err))
    }
  },
  mutations: {
    register({ state }, payload) {
      console.log('register', payload)
    },
    login({ state }, payload) {
      console.log('login', payload)
      // state.authenticated = true
    },
    logout({ state }, payload) {
      state.authenticated = false
    }
  }
}
