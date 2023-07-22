import { afterEach, describe, test } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'

describe('<App/>', () => {
  afterEach(cleanup)

  test('page 404 elements are in the page', () => {
    render(<App />)

    // Header
    screen.getByText('Giffy')
    screen.getByRole('link', { name: 'Register' })
    screen.getByRole('link', { name: 'Login' })

    // SearchForm
    screen.getByPlaceholderText('Cats, dogs, funny, memes, stickers...')
    screen.getByRole('button', { name: 'Search' })

    // Not Found Content
    screen.getByText('Not Found')
    screen.getByText('Sometimes gettings lost isn\'t that bad')
    screen.getByRole('link', { name: 'Go Back' })
    screen.debug()

    const input = screen.getByPlaceholderText('Cats, dogs, funny, memes, stickers...')
    const btn = screen.getByRole('button', { name: 'Search' })

    fireEvent.change(input, { target: { value: 'Cats' } })
    fireEvent.click(btn)
  })
})
