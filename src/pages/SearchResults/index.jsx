import { useEffect, useRef, useCallback } from 'react'
import Gifs from '@/components/Gifs'
import useGifs from '@/hooks/useGifs'
import { SearchResultsWrapper } from './styles'
import { Helmet } from 'react-helmet'
import { useNearScreen } from '@/hooks'
import debounce from 'just-debounce-it'
import StickySearchForm from '@/components/StickySearchForm'
import Spinner from '@/components/Spinner'
import Alert from '@/components/Alert'

export default function SearchResults ({ params: { query, rating, lang } }) {
  const decodeQuery = decodeURI(query)
  const { gifs, isLoading, hasError, setPage } = useGifs({ query: decodeQuery, rating, lang })
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
          {isLoading ? 'Loading...' : `${gifs.length} results of ${decodeQuery} | Giffy`}
        </title>
      </Helmet>

      <SearchResultsWrapper>
        <StickySearchForm />
        {
          gifs.length
            ? <Gifs gifs={gifs} />
            : <p>No there are gifs to show</p>
        }
        <div ref={visorRef} />
        {isLoading && <Spinner />}
        {hasError && <Alert status='error'>Something went wrong, try again later</Alert>}
      </SearchResultsWrapper>
    </>
  )
}
