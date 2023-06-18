import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { register } from '@/services'
import { useLocation } from 'wouter'

const initialValues = { username: '', password: '' }

const validateFormFormik = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Username is required'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 3) {
    errors.password = 'Length must be greater than 3'
  }

  return errors
}

export default function RegisterForm () {
  const [registered, setRegistered] = useState(false)
  const [, setLocation] = useLocation()

  if (registered) {
    return (
      <>
        <h3>You have successfully registered</h3>
        <p>You will be redirect to login</p>
      </>
    )
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setFieldError }) => {
          return register({ username: values.username, password: values.password })
            .then(() => {
              setRegistered(true)

              setTimeout(() => {
                setLocation('/login')
              }, [3000])
            })
            .catch(e => {
              setFieldError('username', 'This username is not valid')
            })
        }}
        validate={validateFormFormik}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type='text'
              placeholder='Your username here'
              name='username'
            />
            <ErrorMessage name='username' component='small' />
            <Field
              type='password'
              placeholder='Your password here'
              name='password'
            />
            <ErrorMessage name='password' component='small' />
            <button type='submit' disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
