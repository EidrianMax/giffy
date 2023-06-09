const API_URL = 'http://localhost:8001/api'

export default function register ({ username, password }) {
  return fetch(`${API_URL}/users`, {
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
    .then(json => {
      const { user } = json

      return user
    })
}
