import { ButtonLink } from '@/components/Button/styles'
import SearchForm from '@/components/SearchForm'
import { getRandomGif } from '@/services'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function ErrorPage () {
  const [randomGif, setRandomGif] = useState({})

  useEffect(() => {
    getRandomGif({ tag: 'Error 404' })
      .then(setRandomGif)
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <SearchForm />
      <h1>Error 404</h1>
      <p>Sometimes gettings lost isn't that bad</p>
      <img src={randomGif.url} alt='Error 404' />
      <ButtonLink href='/'>Go back Home</ButtonLink>
    </>
  )
}
