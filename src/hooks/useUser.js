import { useCallback, useContext, useState } from 'react'
import { UserContext } from '@/context/UserContext'
import {
  login as loginService,
  addFav as addFavService,
  removeFav as removeFavService
} from '@/services'

export default function useUser () {
  const { jwt, setJwt, favs, setFavs } = useContext(UserContext)
  const [state, setState] = useState({
    loading: false,
    error: false
  })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(token => {
        window.sessionStorage.setItem('token', token)
        setJwt(token)
        setState({ loading: false, error: false })
      })
      .catch(error => {
        window.sessionStorage.removeItem('token')
        console.log(error)
        setState({ loading: false, error: true })
      })
  }, [setJwt])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setJwt(null)
  }, [setJwt])

  const addFav = useCallback(({ gifId }) => {
    addFavService({ jwt, gifId })
      .then(setFavs)
      .catch(error => {
        console.log(error)
      })
  }, [jwt, setFavs])

  const removeFav = useCallback(({ gifId }) => {
    removeFavService({ jwt, gifId })
      .then(setFavs)
      .catch(error => {
        console.log(error)
      })
  }, [jwt, setFavs])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    favs,
    addFav,
    removeFav
  }
}
