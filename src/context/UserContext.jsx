import { createContext, useEffect, useState } from 'react'
import { getAllFavs } from '../services'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => window.sessionStorage.getItem('token')
  )
  const [gifsFavs, setGifsFavs] = useState([])

  useEffect(() => {
    if (!token) return setGifsFavs([])

    getAllFavs({ token })
      .then(setGifsFavs)
  }, [token])

  return <UserContext.Provider value={{ token, setToken, gifsFavs, setGifsFavs }}>{children}</UserContext.Provider>
}

export {
  UserContext,
  UserContextProvider
}
