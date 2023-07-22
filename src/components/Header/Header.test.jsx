import { vi, afterEach, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { UserContextProvider } from '@/context/UserContext'
import { useUser } from '@/hooks'

vi.mock('@/hooks/useUser')

afterEach(() => {
  useUser.mockClear()
})

describe('<Header/>', () => {
  test('header render successfully when user is not logged', () => {
    useUser.mockReturnValueOnce({ isLogged: false })

    render(
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    )

    screen.getByRole('link', { name: /giffy/i })
    screen.getByRole('link', { name: /register/i })
    screen.getByRole('link', { name: /login/i })
  })

  test('header render successfully when user is logged', () => {
    useUser.mockReturnValueOnce({ isLogged: true })

    render(
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    )

    screen.getByRole('link', { name: /logout/i })

    screen.debug()
  })
})
