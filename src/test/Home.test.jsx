import { render } from '@testing-library/react'
import { test, expect } from 'vitest'
import Home from '@/pages/Home'

test('home works as expected', async () => {
  const { findByText } = render(<Home />)
  //  TypeError: Cannot destructure property 'gifs' of 'useContext(...)' as it is undefined.
  // Problema con el contexto que aun no se solucionarlo
  const text = await findByText('Last Searchers')
  expect(text).toBeInTheDocument()
})
