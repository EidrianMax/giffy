// import { useContext } from 'react'
// import StaticContext from '@/context/StaticContext'
import Fav from '@/components/Fav'
import Spinner from '@/components/Spinner'
import useSingleGif from '@/hooks/useSingleGif'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'
import { GifDetail } from './styles'

export default function Detail ({ params: { id } }) {
  // const { name } = useContext(StaticContext)
  const { gif, isLoading, isError } = useSingleGif({ id })

  // cambiamos por react-helmet
  // const title = gif ? gif.title : ''
  // const description = gif ? `Detail of ${gif.title}` : ''
  // useSEO({ title, description })

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading..</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{`${gif.title} | Giffy` || 'Giffy'}</title>
      </Helmet>
      <GifDetail>
        <img src={gif.url} alt={gif.title} />
        <Fav gifId={gif.id} />
        <h2>{gif.title}</h2>
      </GifDetail>
    </>
  )
}
