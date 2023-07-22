import { test, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import useGifs from './useGifs'
import { GifsContextProvider } from '@/context/GifsContext'
import { searchGifs } from '@/services'

vi.mock('@/services/searchGifs')

test('should data type are correct', () => {
  const wrapper = ({ children }) => <GifsContextProvider>{children}</GifsContextProvider>
  const { result } = renderHook(() => useGifs(), { wrapper })

  expect(result.current.gifs).toBeInstanceOf(Array)
  expect(result.current.isLoading).toBe(false)
  expect(result.current.hasError).toBe(false)
  expect(result.current.setPage).toBeInstanceOf(Function)
  expect(result.current.setGifs).toBeInstanceOf(Function)
})

test('should change gifs when use setGifs', () => {
  searchGifs.mockImplementation(() => Promise.resolve([{ name: 'pepe' }]))

  const wrapper = ({ children }) => <GifsContextProvider>{children}</GifsContextProvider>
  const { result } = renderHook(() => useGifs({ query: 'batman', rating: 'g', lang: 'es' }), { wrapper })

  console.log(result.current.gifs)
})
