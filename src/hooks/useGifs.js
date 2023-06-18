import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '@/context/GifsContext'
import { getGifs } from '@/services'

const INITIAL_PAGE = 0

export default function useGifs ({ keyword, rating } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'ramdon'

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse, rating, limit: 20 }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      // guardamos las keyword del localStorage
      localStorage.setItem('lastKeyword', decodeURI(keywordToUse))
    })
  }, [keyword, keywordToUse, setGifs, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, rating, page })
      .then(gifs => {
        setGifs(prevGifs => prevGifs.concat(gifs))
        setLoadingNextPage(false)
      })
  }, [page, setGifs, keywordToUse, rating])

  return { loading, loadingNextPage, gifs, setPage }
}
