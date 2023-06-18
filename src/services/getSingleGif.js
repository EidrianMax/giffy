import { API_URL, API_KEY } from './settings'

export default function getSingleGif ({ id } = {}) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => {
      if (!res.ok) throw new Error('Response is not ok')

      return res.json()
    })
    .then(({ data }) => {
      const { id, title, images } = data
      const { url } = images.downsized_medium
      return { id, title, url }
    })
}
