import axios from 'axios'
import router from 'router'

// TODO: Validation
export default {
  namespaced: true,
  state: {
    authorized: false,
    token: ''
  },
  getters: {},
  actions: {
    async authorize({ commit, state, rootState }, payload) {
      return await axios.get('/api/auth', {
        headers: { 'Authorization': (state.token || localStorage.token || '') }
      })
      .then(data => {
        const status = data.data.status

        if (status === 'success') {
          const authorized = data.data.details.authorized
          const token = data.data.details.token
          const user = data.data.details.user

          commit('updateAuthorized', { authorized })
          commit('updateToken', { token })
          rootState.user = { ...rootState.user, ...user }
        } else {
          commit('updateAuthorized', { authorized: false })
          commit('updateToken', { token: '' })
          rootState.user = { id: '', email: '', name: '' }

          console.log('Authorization failed:', data)
        }

        return data.data.details.authorized
      })
      .catch(err => {
        commit('updateAuthorized', { authorized: false })
        commit('updateToken', { token: '' })
        rootState.user = { id: '', email: '', name: '' }

        console.log('Error authorizing:', err)

        return false
      })
    },

    register({ commit, rootState }, payload) {
      axios.post('/api/auth/register', payload)
        .then(data => {
          const status = data.data.status
          
          if (status === 'success') {
            const authorized = data.data.details.authorized
            const token = data.data.details.token
            const user = data.data.details.user

            commit('updateAuthorized', { authorized })
            commit('updateToken', { token })
            rootState.user = { ...rootState.user, ...user }

            router.push('/dashboard')
          } else {
            commit('updateAuthorized', { authorized: false })
            commit('updateToken', { token: '' })
            rootState.user = { id: '', email: '', name: '' }

            console.log('Registration failed:', data)
          }
        })
        .catch(err => {
          commit('updateAuthorized', { authorized: false })
          commit('updateToken', { token: '' })
          rootState.user = { id: '', email: '', name: '' }

          console.log('Error registering user:', err)
        })
    },

    login({ commit, rootState }, payload) {
      axios.post('/api/auth/login', payload)
        .then(data => {
          const status = data.data.status

          if (status === 'success') {
            const authorized = data.data.details.authorized
            const token = data.data.details.token
            const user = data.data.details.user

            commit('updateAuthorized', { authorized })
            commit('updateToken', { token })
            rootState.user = { ...rootState.user, ...user }

            router.push('/dashboard')
          } else {
            commit('updateAuthorized', { authorized: false })
            commit('updateToken', { token: '' })
            rootState.user = { id: '', email: '', name: '' }

            console.log('Error logging in', data)
          }
        })
        .catch(err => {
          commit('updateAuthorized', { authorized: false })
          commit('updateToken', { token: '' })
          rootState.user = { id: '', email: '', name: '' }

          console.log('Error logging user in:', err)
        })
    },

    logout({ commit, rootState }) {
      commit('updateAuthorized', { authorized: false })
      commit('updateToken', { token: '' })
      rootState.user = { id: '', email: '', name: '' }

      localStorage.token = ''

      router.push('/auth/login')
    }
  },
  mutations: {
    updateAuthorized(state, payload) {
      state.authorized = payload.authorized
    },

    updateToken(state, payload) {
      state.token = payload.token
      localStorage.token = payload.token
    },

    updateError(state, payload) {
      state.error = payload.error
    }
  }
}
