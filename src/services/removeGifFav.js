import { API_URL_USERS } from './settings'

export default async function removeGifFav ({ token, gifId }) {
  const res = await fetch(`${API_URL_USERS}/favs/${gifId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) throw new Error('Response in not OK')

  const favs = await res.json()

  return favs
}
