import { useLocation } from 'wouter'
import useSearchForm from './hook'
import { StyledSearchForm } from './style'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGS = ['es', 'en', 'fr']

export default function SearchForm () {
  const { query, rating, lang, updateQuery, updateRating, updateLang } =
    useSearchForm({ initRating: RATINGS[0], initLang: LANGS[0] })
  const [, setLocation] = useLocation()

  const handleQueryChange = e => updateQuery(e.target.value)
  const handleRatingChange = e => updateRating(e.target.value)
  const handleLangChange = e => updateLang(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    setLocation(`/search/${query}/${rating}/${lang}`)
  }

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Cats, dogs, funny, memes...'
        onChange={handleQueryChange}
        value={query}
      />
      <select value={rating} onChange={handleRatingChange}>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>

      <select onChange={handleLangChange} value={lang}>
        {LANGS.map(lang => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </StyledSearchForm>
  )
}
