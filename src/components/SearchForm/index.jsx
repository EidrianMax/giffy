/* eslint-disable react-refresh/only-export-components */
import './styles.css'
import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'
import { Input, Select } from '../Input'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initKeyword = '', initRating = 'g' }) => {
  const [, setPath] = useLocation()

  const { keyword, rating, updateKeyword, updateRating } = useForm({ initKeyword, initRating })

  const handleChange = event => {
    updateKeyword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setPath(`/search/${keyword}/${rating}`)
  }

  const handleRatingChange = event => {
    updateRating(event.target.value)
  }

  return (
    <form className='Search-Form' onSubmit={handleSubmit}>
      <Input type='text' placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
      <Select value={rating} onChange={handleRatingChange}>
        <option disabled>Rating type</option>
        {RATINGS.map(rating =>
          <option key={rating}>{rating}</option>
        )}
      </Select>
    </form>
  )
}

export default React.memo(SearchForm)
