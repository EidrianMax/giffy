import { USERS_API_URL } from './settings'

export default async function removeFav ({ jwt, gifId }) {
  const res = await fetch(`${USERS_API_URL}/users/favs/${gifId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  })

  if (!res.ok) throw new Error('Response in not OK')

  const json = await res.json()

  const { favs } = json

  return favs
}
