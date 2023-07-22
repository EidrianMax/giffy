import { API_KEY, API_URL_GIPHY } from './settings'

export default async function getTrendingGifs ({ limit = '10', page = 0 } = {}) {
  const res = await fetch(`${API_URL_GIPHY}/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${page * limit}&rating=g&bundle=messaging_non_clips`)

  if (!res.ok) throw new Error(`Something went wrong,[Status Code]: ${res.status}`)

  const { data } = await res.json()

  const gifs = data.map(gif => {
    const { id, title, images } = gif
    const { url } = images.original

    return { id, title, url }
  })

  return gifs
}
