import { API_URL_USERS } from './settings'

export default function addGifFav ({ token, gifId }) {
  return fetch(`${API_URL_USERS}/users/favs/${gifId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
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