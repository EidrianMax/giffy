import { StyledHeader, HeaderNav } from './style'
import { Logo } from '@/components/Logo/style'
import { Link } from '@/components/Link/style'
import useUser from '@/hooks/useUser'
import { useRoute } from 'wouter'

function Header () {
  const { isLogged, logout } = useUser()
  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  return (
    <StyledHeader>
      <Logo href='/'>Giffy</Logo>
      <HeaderNav>
        {
          matchLogin || matchRegister
            ? null
            : isLogged
              ? <Link href='/' onClick={logout}>Logout</Link>
              : (
                <>
                  <Link href='/register'>Register</Link>
                  <Link href='/login'>Login</Link>
                </>
                )
        }
      </HeaderNav>
    </StyledHeader>
  )
}

// const HeaderMemo = memo(Header)

export default Header
