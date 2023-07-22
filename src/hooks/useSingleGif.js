import { useEffect, useState } from 'react'
import { getGifsById } from '../services'

export default function useSingleGifs ({ gifId }) {
  const [gif, setGif] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getGifsById({ gifId })
      .then(setGif)
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [gifId])

  return { gif, setGif, isLoading, hasError }
}
