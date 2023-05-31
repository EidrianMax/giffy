import { useContext, useEffect, useState } from 'react'
import getGifs from '@/services/getGifs'
import { GifsContext } from '@/context/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs ({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  // recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'ramdon'

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      // guardamos las keyword del localStorage
      localStorage.setItem('lastKeyword', decodeURI(keywordToUse))
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(gifs => {
        setGifs(prevGifs => prevGifs.concat(gifs))
        setLoadingNextPage(false)
      })
  }, [page, setGifs, keywordToUse])

  return { loading, loadingNextPage, gifs, setPage }
}
