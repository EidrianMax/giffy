import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserContextProvider } from '@/context/UserContext'
import Fav from '.'

describe('<Fav/>', () => {
  test('render fav successfully', () => {
    render(
      <UserContextProvider>
        <Fav />
      </UserContextProvider>
    )

    screen.getByText('💗')
    screen.debug()
  })
})
