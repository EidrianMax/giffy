import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useUser from '../../hooks/useUser'
import { useLocation } from 'wouter'
import { StyledRegisterForm } from './styles'
import { Button } from '../Button/style'
import { Input } from '../Input/style'
import Alert from '../Alert'
import Registered from '../Registered'
import FormErrorMessage from '../FormErrorMessage'
import Spinner from '../Spinner'

export default function RegisterForm () {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm()
  const {
    isLogged, register: registerUser, isRegistered, isLoading, hasError
  } = useUser()
  const [, setLocation] = useLocation()

  const onSubmit = ({ username, password }) => {
    registerUser({ username, password })
  }

  useEffect(() => {
    if (isLogged) {
      setLocation('/')
    }
  }, [isLogged, setLocation])

  if (isRegistered) return <Registered />

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>

        <Input
          id='username'
          placeholder='Username'
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <FormErrorMessage>{errors.username?.message}</FormErrorMessage>}

        <Input
          id='password'
          type='password'
          placeholder='Password'
          {...register('password', { required: true, minLength: 3 })}
        />
        {errors.password && <FormErrorMessage>Password is required</FormErrorMessage>}

        <Button>Register</Button>
      </StyledRegisterForm>

      {isLoading && <Spinner />}

      {hasError && <Alert status='error'>User exist</Alert>}
    </>
  )
}
