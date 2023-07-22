import { render } from '@testing-library/react'

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui)
  }
}

export * from '@testing-library/react'
