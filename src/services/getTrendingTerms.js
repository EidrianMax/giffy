import { API_URL_GIPHY, API_KEY } from './settings'

export default function getTrendingTerms () {
  return fetch(`${API_URL_GIPHY}/trending/searches?api_key=${API_KEY}`)
    .then(res => {
      if (!res.ok) throw new Error('Response is not OK')

      return res.json()
    })
    .then(({ data }) => data)
}
