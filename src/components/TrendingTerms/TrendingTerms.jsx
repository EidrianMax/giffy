import { useEffect, useState } from 'react'
import getTrendingSearchTerms from '@/services/getTrendingSearchTerms'
import { TrendingTitle, TrendingList, TrendingItem, TrendingLink } from './styles'

export default function TrendingTerms () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearchTerms()
      .then(setTrends)
  }, [])

  return (
    <section>
      <TrendingTitle>Trending</TrendingTitle>

      <TrendingList>
        {trends.map((category, index) => (
          <TrendingItem key={category} index={index}>
            <TrendingLink href={`search/${category}`}>{category}</TrendingLink>
          </TrendingItem>
        ))}
      </TrendingList>
    </section>
  )
}
