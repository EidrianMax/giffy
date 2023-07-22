import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import { getTrendingGifs } from '../services'

const INITIAL_PAGE = 0

export default function useTrendingGifs () {
  const { gifs, setGifs } = useContext(GifsContext)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    setIsLoading(true)
    getTrendingGifs({ limit: 20 })
      .then(setGifs)
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setIsLoading(true)
    getTrendingGifs({ limit: 20, page })
      .then(gifs => {
        setGifs(prevGifs => [...prevGifs, ...gifs])
      })
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [page, setGifs])

  return { gifs, setGifs, isLoading, hasError, setPage }
}
