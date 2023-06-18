import { USERS_API_URL } from './settings'

export default function getAllFavs ({ jwt }) {
  return fetch(`${USERS_API_URL}/users/favs`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK')

      return res.json()
    })
    .then(json => {
      const { favs } = json

      return favs
    })
}
