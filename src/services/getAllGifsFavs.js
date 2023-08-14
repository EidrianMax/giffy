import { API_URL_USERS } from './settings'

export default function getAllFavs ({ token }) {
  return fetch(`${API_URL_USERS}/favs`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK')

      return res.json()
    })
    .then(favs => {
      return favs
    })
}
