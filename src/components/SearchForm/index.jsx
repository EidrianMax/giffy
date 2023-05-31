/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')

  const handleChange = event => setKeyword(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({ keyword })
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
  </form>
}

export default React.memo(SearchForm)
