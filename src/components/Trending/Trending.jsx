import { useEffect, useState } from 'react'
import { StyledTrending, StyledTrendingItem, StyledTrendingLink } from './style'
import { getTrendingTerms } from '@/services'

export default function Trending () {
  const [trendingTerms, setTrendingTerms] = useState([])

  useEffect(() => {
    getTrendingTerms()
      .then(setTrendingTerms)
      .catch(e => console.log(e))
  }, [])

  return (
    <StyledTrending>
      {trendingTerms?.map((trend, index) => (
        <StyledTrendingItem key={trend} index={index}>
          <StyledTrendingLink href={`/search/${trend}`}>
            {trend}
          </StyledTrendingLink>
        </StyledTrendingItem>
      ))}
    </StyledTrending>
  )
}
