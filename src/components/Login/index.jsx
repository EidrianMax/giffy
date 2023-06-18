import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '@/hooks/useUser'
import { Button } from '@/components/Button/styles'
import { Input } from '../Input'

export default function Login ({ onCloseModal }) {
  const { isLogged, isLoginLoading, hasLoginError, login } = useUser()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onCloseModal && onCloseModal()
    }
  }, [isLogged, navigate, onCloseModal])

  const handleSubmit = e => {
    e.preventDefault()

    login({ username, password })

    onCloseModal && onCloseModal()
  }

  return (
    <>
      {isLoginLoading && <p>Checking credentials...</p>}

      {!isLoginLoading && (
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Username'
            autoComplete='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            autoComplete='current-password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </form>
      )}

      {hasLoginError && <p>Credentials are invalid</p>}
    </>
  )
}
