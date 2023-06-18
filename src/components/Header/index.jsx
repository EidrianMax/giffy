import './styles.css'
import useUser from '@/hooks/useUser'
import { useRoute } from 'wouter'
import { Link } from '../Link/style'

export default function Header () {
  const { isLogged, logout } = useUser()
  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  const handleLogout = e => {
    e.preventDefault()

    logout()
  }

  return matchLogin || matchRegister
    ? null
    : (
      <div className='Header'>
        {isLogged
          ? (
            <Link to='#' onClick={handleLogout}>
              Logout
            </Link>
            )
          : (
            <>
              <Link style={{ marginRight: '1rem' }} to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
            )}
      </div>
      )
}
