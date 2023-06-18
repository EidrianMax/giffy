const API_URL = 'http://localhost:8001/api'

export default function addFav ({ jwt, gifId }) {
  return fetch(`${API_URL}/users/favs/${gifId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Response in not OK')

      return res.json()
    })
    .then(json => {
      const { favs } = json

      return favs
    })
}
