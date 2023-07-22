import { Helmet } from 'react-helmet'
import LoginForm from '../../components/LoginForm'

export default function Login () {
  return (
    <div>
      <Helmet>
        <title>Login | Giffy</title>
        <meta name='description' content='Search, discover & share your favorite GIFs' />
      </Helmet>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}><LoginForm /></div>
    </div>
  )
}
