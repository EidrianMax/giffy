import { useCallback, useContext, useState } from 'react'
import { loginUser, registerUser, addGifFav, removeGifFav } from '../services'
import { UserContext } from '../context/UserContext'

export default function useUser () {
  const { token, setToken, gifsFavs, setGifsFavs } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const register = useCallback(({ username, password }) => {
    setHasError(false)
    setIsLoading(true)
    registerUser({ username, password })
      .then((user) => {
        setIsRegistered(true)
      })
      .catch(e => {
        setHasError(true)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const login = useCallback(({ username, password }) => {
    setIsLoading(true)
    setHasError(false)
    loginUser({ username, password })
      .then(token => {
        window.sessionStorage.setItem('token', token)
        setToken(token)
      })
      .catch(e => {
        window.sessionStorage.removeItem('token')
        setHasError(true)
        setTimeout(() => {
          setHasError(false)
        }, 2000)
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [setToken])

  const logout = useCallback(() => {
    setToken(null)
    window.sessionStorage.removeItem('token')
  }, [setToken])

  const addFav = useCallback(({ gifId }) => {
    addGifFav({ token, gifId })
      .then(setGifsFavs)
      .catch(e => {
        console.log(e)
      })
  }, [setGifsFavs, token])

  const removeFav = useCallback(({ gifId }) => {
    removeGifFav({ token, gifId })
      .then(setGifsFavs)
      .catch(e => {
        console.log(e)
      })
  }, [setGifsFavs, token])

  return {
    isLogged: Boolean(token),
    isLoading,
    hasError,
    login,
    logout,
    register,
    isRegistered,
    gifsFavs,
    setGifsFavs,
    addFav,
    removeFav
  }
}
