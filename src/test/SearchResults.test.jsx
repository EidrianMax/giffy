import { test } from 'vitest'
import { render } from '@testing-library/react'
import SearchResults from '@/pages/SearchResults'

test('SearchResults works as expected', async () => {
  render(<SearchResults params={{ keyword: 'pepito' }}/>)
  // Lo mismo que en Home, el contexto no me deja hacer las pruebas
})
