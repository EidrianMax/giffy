import { createContext, useEffect, useState } from 'react'
import { getAllFavs } from '@/services'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('token')
  )
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (!jwt) return setFavs([])

    getAllFavs({ jwt })
      .then(setFavs)
      .catch(error => {
        console.log(error)
      })
  }, [jwt])

  return (
    <UserContext.Provider value={{ jwt, setJwt, favs, setFavs }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
