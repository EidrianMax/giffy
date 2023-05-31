import { useEffect, useState } from 'react'
import getSingleGif from '@/services/getSingleGif'
import useGifs from './useGifs'

export default function useSingleGif ({ id } = {}) {
  const { gifs } = useGifs()

  const gifFromCache = gifs.find(gif => {
    return gif.id === id
  })

  const [gif, setGiF] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(gif => {
          setGiF(gif)
          setIsLoading(false)
          setIsError(false)
        })
        .catch(() => {
          setIsError(true)
          setIsLoading(false)
        })
    }
  }, [gif, id, isLoading])

  return { gif, isLoading, isError }
}
