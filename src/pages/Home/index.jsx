import Gifs from '@/components/Gifs'
import Trending from '@/components/Trending'
import { WrapperHome, Grid } from './styles'
import { useTrendingGifs } from '@/hooks'
import { Helmet } from 'react-helmet'
import StickySearchForm from '@/components/StickySearchForm'
import Spinner from '@/components/Spinner'
import Alert from '@/components/Alert'

export default function Home () {
  const { gifs, isLoading, hasError } = useTrendingGifs()

  return (
    <>
      <Helmet>
        <title>{isLoading ? 'Loading...' : 'GIFFY - Be Animated'}</title>
      </Helmet>

      <WrapperHome>
        <StickySearchForm />
        <h1>Trending</h1>
        <Grid>
          <div>
            {gifs?.length ? <Gifs gifs={gifs} /> : <p>No there gifs to show</p>}
            {hasError && <Alert status='error'>Something went wrong, try again later</Alert>}
          </div>
          <Trending />
        </Grid>
        {isLoading && <Spinner />}
      </WrapperHome>
    </>
  )
}
