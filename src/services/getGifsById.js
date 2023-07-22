import { API_KEY, API_URL_GIPHY } from './settings'

export default async function getGifsById ({ gifId } = {}) {
  const res = await fetch(`${API_URL_GIPHY}/gifs/${gifId}?api_key=${API_KEY}&rating=g`)

  if (!res.ok) throw new Error(`Something went wrong,[Status Code]: ${res.status}`)

  const { data } = await res.json()
  const { id, title, images } = data
  const { url } = images.original

  return { id, title, url }
}
