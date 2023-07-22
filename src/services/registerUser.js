const API_URL = 'https://giffy-production.up.railway.app/api'

export default function registerUser ({ username, password }) {
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
    .then(user => {
      return user
    })
}
