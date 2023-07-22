import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import { useEffect } from 'react'
import { Input } from '../Input/style'
import { Button } from '../Button/style'
import { StyledLoginForm } from './styles'
import FormErrorMessage from '../FormErrorMessage'
import Alert from '../Alert'
import Spinner from '../Spinner'

export default function LoginForm ({ onCloseModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [, setLocation] = useLocation()
  const { login, isLoading, hasError, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) {
      setLocation('/')
    }
  }, [isLogged, setLocation])

  const onSubmit = ({ username, password }) => {
    login({ username, password })
    isLogged && onCloseModal()
  }

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <Input
          placeholder='Username'
          {...register('username', { required: true })}
        />
        {errors.username && <FormErrorMessage>Username is required</FormErrorMessage>}

        <Input
          type='password'
          placeholder='Password'
          {...register('password', { required: true, minLength: 3 })}
        />
        {errors.password && <FormErrorMessage>Password is required</FormErrorMessage>}

        <Button>Login</Button>
      </StyledLoginForm>

      {isLoading && <Spinner />}

      {hasError && <Alert status='error'>Wrong credentials</Alert>}
    </>
  )
}
