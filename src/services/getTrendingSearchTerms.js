import { API_URL, API_KEY } from './settings'

export default function getTrendingSearchTerms () {
  const URL =
      `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(URL)
    .then(res => res.json())
    .then(({ data }) => data)
}
