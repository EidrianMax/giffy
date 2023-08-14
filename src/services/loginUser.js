import { API_URL_USERS } from './settings'

export default function loginUser ({ username, password }) {
  return fetch(`${API_URL_USERS}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Response in not OK')

      return res.json()
    })
    .then(json => {
      const { token } = json

      return token
    })
}
