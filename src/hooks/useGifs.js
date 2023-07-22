import { useContext, useEffect, useRef, useState } from 'react'
import { GifsContext } from '@/context/GifsContext'
import { searchGifs } from '@/services'

const INITIAL_PAGE = 0

export default function useGifs ({ query, rating, lang } = {}) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const prevQuery = useRef()

  useEffect(() => {
    if (query === prevQuery.current) return

    prevQuery.current = query
    setIsLoading(true)
    searchGifs({ query, limit: 20, rating, lang })
      .then(gifs => {
        setGifs(gifs)
      })
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [query, setGifs, rating, lang])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setIsLoading(true)
    searchGifs({ query, limit: 20, page, rating, lang })
      .then(gifs => {
        setGifs(prevGifs => [...prevGifs, ...gifs])
      })
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [page, query, setGifs, rating, lang])

  return { gifs, setGifs, isLoading, hasError, setPage }
}
