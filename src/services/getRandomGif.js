import { API_URL, API_KEY } from './settings'

export default function getRandomGif ({ tag = '' }) {
  return fetch(`${API_URL}/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`)
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK')

      return res.json()
    })
    .then(({ data }) => {
      const { id, images } = data
      const { url } = images.downsized_medium
      return { id, url }
    })
}
