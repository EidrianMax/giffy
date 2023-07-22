import SearchForm from '@/components/SearchForm'
import { useGifs } from '@/hooks'
import { Helmet } from 'react-helmet'
import { WrapperNotFound } from './styles'
import { Link } from '@/components/Link/style'

export default function NotFound () {
  const { gifs } = useGifs({ query: 'Error 404' })
  const gif = gifs[Math.floor(Math.random() * gifs.length + 1)]
  const gifUrl = gif?.url

  return (
    <>
      <Helmet>
        <title>Page 404 | Not Found</title>
      </Helmet>

      <WrapperNotFound>
        <SearchForm />
        <h1>Not Found</h1>
        <img src={gifUrl} alt='Not Found Funny Image' />
        <p>Sometimes gettings lost isn't that bad</p>
        <Link href='/'>Go Back</Link>
      </WrapperNotFound>
    </>
  )
}
