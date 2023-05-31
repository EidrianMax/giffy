import { useCallback, useEffect, useRef } from 'react'
import useGifs from '@/hooks/useGifs'
import Spinner from '@/components/Spinner'
import ListOfGifs from '@/components/ListOfGif'
import useNearScreen from '@/hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

export default function SearchResults ({ params: { keyword } }) {
  const decodeKeyword = decodeURI(keyword)

  const { loading, gifs, setPage } = useGifs({ keyword: decodeKeyword })

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
  console.log(isNearScreen)

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200),
  [setPage])

  const title = gifs.length
    ? `${gifs.length} results of ${decodeKeyword}`
    : ''

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen, debounceHandleNextPage])

  return <>
    {
      loading
        ? (
          <Helmet>
            <title>Loading...</title>
            <Spinner />
          </Helmet>
          )
        : <>
          <Helmet>
            <meta name='description' content={title} />
            <title>{title}</title>
          </Helmet>
            <h3>{decodeKeyword}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
        </>
    }
  </>
}
