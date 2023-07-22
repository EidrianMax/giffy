import { API_URL_USERS } from './settings'

export default async function removeGifFav ({ token, gifId }) {
  const res = await fetch(`${API_URL_USERS}/users/favs/${gifId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) throw new Error('Response in not OK')

  const json = await res.json()

  const { favs } = json

  return favs
}
