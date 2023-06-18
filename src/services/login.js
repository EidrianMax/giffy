const API_URL = 'http://localhost:8001/api'

export default function login ({ username, password }) {
  return fetch(`${API_URL}/users/auth`, {
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
