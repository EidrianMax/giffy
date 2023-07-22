import { expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react-hooks'
import useSearchForm from './hook'

const setup = (params) => (
  renderHook(() => useSearchForm(params))
)

test('verify that result of hook is correct', () => {
  const { result } = setup()

  expect(result.current.query).toBe('')
  expect(result.current.rating).toBe(undefined)
  expect(result.current.lang).toBe(undefined)
  expect(typeof result.current.updateQuery).toBe('function')
  expect(typeof result.current.updateRating).toBe('function')
  expect(typeof result.current.updateLang).toBe('function')
})

test('verify initial values', () => {
  const { result } = setup({ initRating: 'g', initLang: 'es' })

  expect(result.current.rating).toBe('g')
  expect(result.current.lang).toBe('es')
})

test('should change query, rating and lang', () => {
  const { result } = setup()

  act(() => {
    result.current.updateQuery('batman')
    result.current.updateRating('pg')
    result.current.updateLang('en')
  })

  expect(result.current.query).toBe('batman')
  expect(result.current.rating).toBe('pg')
  expect(result.current.lang).toBe('en')
})
