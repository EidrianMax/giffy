import { API_URL, API_KEY } from './settings'

export default function getGifs ({ keyword = 'morty', limit = 5, page = 0 } = {}) {
  const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

  return fetch(URL)
    .then(res => res.json())
    .then(({ data }) => {
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.downsized_medium

        return { id, title, url }
      })
      return gifs
    })
}
