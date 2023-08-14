import { API_URL_USERS } from './settings'

export default function registerUser ({ username, password }) {
  return fetch(`${API_URL_USERS}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK')

      return res.json()
    })
    .then(user => {
      return user
    })
}
