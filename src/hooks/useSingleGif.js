import { useEffect, useState } from 'react'
import useGifs from './useGifs'
import { getSingleGif } from '@/services'

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
        .catch((error) => {
          setIsLoading(false)
          setIsError(true)
          console.log(error)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}
