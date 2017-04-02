import axios from 'axios'

export function authorize() {
  return axios.get('/auth', {
    headers: { 'Authorization': (localStorage.token || '') }
  }).then(data => data.data.authorized)
}
