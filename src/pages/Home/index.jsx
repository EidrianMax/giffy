import Gifs from '@/components/Gifs'
import Trending from '@/components/Trending'
import { WrapperHome, Grid } from './styles'
import { useNearScreen, useTrendingGifs } from '@/hooks'
import { Helmet } from 'react-helmet'
import StickySearchForm from '@/components/StickySearchForm'
import Spinner from '@/components/Spinner'
import Alert from '@/components/Alert'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'

export default function Home () {
  const { gifs, isLoading, hasError, setPage } = useTrendingGifs()
  const visorRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: isLoading ? null : visorRef, once: false })

  const handleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 100
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) handleNextPage()
  }, [isNearScreen, handleNextPage])

  return (
    <>
      <Helmet>
        <title>
          {isLoading ? 'Loading...' : 'GIFFY - Be Animated'}
        </title>
      </Helmet>

      <WrapperHome>
        <StickySearchForm />
        <h1>Trending</h1>
        <Grid>
          <div>
            {
              gifs?.length
                ? <Gifs gifs={gifs} />
                : <p>No there gifs to show</p>
            }
            {hasError && <Alert status='error'>Something went wrong, try again later</Alert>}
            <div ref={visorRef} />
          </div>
          <Trending />
        </Grid>
        {isLoading && <Spinner />}
      </WrapperHome>
    </>
  )
}
