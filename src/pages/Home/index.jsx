import './styles.css'
import { useLocation } from 'wouter'
import useGifs from '@/hooks/useGifs'
import ListOfGifs from '@/components/ListOfGif'
import Spinner from '@/components/Spinner'
import LazyTrending from '@/components/TrendingTerms'
import SearchForm from '@/components/SearchForm'
import { useCallback } from 'react'
import { Helmet } from 'react-helmet'

export default function Home () {
  const [, setPath] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    setPath(`/search/${keyword}`)
  }, [setPath])

  return <>
    <Helmet>
      <title>Home | Giffy</title>
    </Helmet>

    <SearchForm onSubmit={handleSubmit} />

    <h2>Last searchers</h2>
    {
      loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
    }

    <LazyTrending />
  </>
}
