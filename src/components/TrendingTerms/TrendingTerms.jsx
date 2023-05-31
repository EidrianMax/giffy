import './styles.css'
import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import getTrendingSearchTerms from '@/services/getTrendingSearchTerms'

export default function TrendingTerms () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearchTerms()
      .then(setTrends)
  }, [])

  return (
    <div>
      <h2>Trending</h2>

      <ul className='trending-list'>
        {trends.map(category => (
          <li className='trending-item' key={category}>
            <Link href={`search/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
