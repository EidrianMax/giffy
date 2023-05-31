import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

test('render App without crashing', () => {
  render(<App />)
})

test('search Giffy title successfully', async () => {
  render(<App />)
  const text = screen.getByText('Giffy')
  expect(text).toBeInTheDocument()
})
