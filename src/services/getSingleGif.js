import { API_URL, API_KEY } from './settings'

export default function getSingleGif ({ id } = {}) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(({ data }) => {
      const { id, title, images } = data
      const { url } = images.downsized_medium
      return { id, title, url }
    })
}
