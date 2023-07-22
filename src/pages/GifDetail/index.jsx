import { GifDetailWrapper, Gif } from './styles'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import useSingleGifs from '@/hooks/useSingleGif'
import Fav from '@/components/Fav'
import StickySearchForm from '@/components/StickySearchForm'
import Spinner from '@/components/Spinner'

export default function GifDetail ({ params: { gifId } }) {
  const { gif, isLoading, hasError } = useSingleGifs({ gifId })

  return (
    <>
      <Helmet>
        <title>
          {isLoading ? 'Loading...' : `${gif?.title} | Giffy`}
        </title>
      </Helmet>

      <GifDetailWrapper>
        <StickySearchForm />
        <Gif>
          <img src={gif?.url} alt={gif?.title} />
          <Fav gifId={gifId} />
        </Gif>
        <h1>{gif?.title}</h1>
      </GifDetailWrapper>

      {isLoading && <Spinner />}

      {hasError && <Redirect to='/404' />}
    </>
  )
}
