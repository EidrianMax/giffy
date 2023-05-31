// import { useContext } from 'react'
// import StaticContext from '@/context/StaticContext'
import Gif from '@/components/Gif'
import Spinner from '@/components/Spinner'
import useSingleGif from '@/hooks/useSingleGif'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'

export default function Detail ({ params: { id } }) {
  // const { name } = useContext(StaticContext)
  const { gif, isLoading, isError } = useSingleGif({ id })

  // cambiamos por react-helmet
  // const title = gif ? gif.title : ''
  // const description = gif ? `Detail of ${gif.title}` : ''
  // useSEO({ title, description })

  if (isLoading) {
    return (
    <Helmet>
      <title>Loading..</title>
      <Spinner />
    </Helmet>
    )
  }
  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{`${gif.title} | Giffy` || 'Giffy'}</title>
      </Helmet>
      <Gif {...gif} />
    </>
  )
}
