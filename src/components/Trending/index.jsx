import { Suspense, lazy } from 'react'
import { useNearScreen } from '@/hooks'

const Trending = lazy(
  () => import('./Trending')
)

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div ref={fromRef}>
        {isNearScreen ? <Trending /> : null}
      </div>
    </Suspense>
  )
}
