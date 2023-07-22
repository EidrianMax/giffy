import { Helmet } from 'react-helmet'
import RegisterForm from '../../components/RegisterForm'

export default function Register () {
  return (
    <>
      <Helmet>
        <title>Register | Giffy</title>
        <meta name='description' content='Search, discover & share your favorite GIFs' />
      </Helmet>

      <div style={{ maxWidth: '500px', margin: '0 auto' }}><RegisterForm /></div>
    </>
  )
}
