import axios from 'axios'

// TODO
export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {
    async login({ commit }, payload) {
      await console.log('logging in', payload)
    },

    async logout({ commit }) {
      await console.log('logging out')
    },

    async register({ commit }, payload) {
      const register = await axios.post('/auth/register', payload).then(data => data.data)

      console.log('registering', register)
    }
  },
  mutations: {}
}
