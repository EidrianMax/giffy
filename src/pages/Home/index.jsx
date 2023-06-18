import useGifs from '@/hooks/useGifs'
import Gifs from '@/components/Gifs'
import Spinner from '@/components/Spinner'
import LazyTrendingTerms from '@/components/TrendingTerms'
import SearchForm from '@/components/SearchForm'
import { Helmet } from 'react-helmet'
import { HomeGrid } from './styles'

export default function Home () {
  const { loading, gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>

      <SearchForm />

      <HomeGrid>
        <div>
          <h3 style={{ fontSize: '2rem', marginTop: '1rem' }}>Last searchers</h3>

          <Gifs gifs={gifs} />
        </div>

        {loading && <Spinner />}

        <LazyTrendingTerms />
      </HomeGrid>
    </>
  )
}
