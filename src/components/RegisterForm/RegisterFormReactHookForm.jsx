import { useForm } from 'react-hook-form'

export default function RegisterFormReactHookForm () {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('username', { required: true })}
        type='text'
        placeholder='Your username here'
      />
      {errors.username && <small>Username is required</small>}
      {errors.username?.type === 'required' && <small>Username is required</small>}
      <input
        {...register('password', { required: true })}
        type='password'
        placeholder='Your password here'
      />
      {errors.password && <small>Password is required</small>}
      <button>Register</button>
    </form>
  )
}
