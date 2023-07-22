import { API_KEY, API_URL_GIPHY } from './settings.js'

export default async function searchGifs ({ query = '', limit = 10, page = 0, rating = '', lang = '' } = {}) {
  const res = await fetch(`${API_URL_GIPHY}/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}&bundle=messaging_non_clips`)

  if (!res.ok) throw new Error(`Something went wrong,[Status Code]: ${res.status}`)

  const { data } = await res.json()

  const gifs = data.map(gif => {
    const { id, title, images } = gif
    const { url } = images.original

    return { id, title, url }
  })

  return gifs
}
