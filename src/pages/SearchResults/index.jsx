import { useCallback, useEffect, useRef } from 'react'
import useGifs from '@/hooks/useGifs'
import Spinner from '@/components/Spinner'
import Gifs from '@/components/Gifs'
import useNearScreen from '@/hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from '@/components/SearchForm'

export default function SearchResults ({ params }) {
  const { keyword, rating } = params
  const decodeKeyword = decodeURI(keyword)

  const { loading, gifs, setPage } = useGifs({ keyword: decodeKeyword, rating })

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    [setPage]
  )

  const title = gifs.length
    ? `${gifs.length} results of ${decodeKeyword} | Giffy`
    : ''

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      {
        loading
          ? (
            <>
              <Helmet>
                <title>Loading...</title>
              </Helmet>
              <Spinner />
            </>
            )
          : (
            <>
              <Helmet>
                <meta name='description' content={title} />
                <title>{title}</title>
              </Helmet>
              <SearchForm initKeyword={decodeKeyword} initRating={rating} />
              <h3>{decodeKeyword}</h3>
              <Gifs gifs={gifs} />
              <div id='visor' ref={externalRef} />
            </>
            )
      }
    </>
  )
}
