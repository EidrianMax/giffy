import { test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useForm from './hook'

const setup = params => renderHook(() => useForm(params))

test('should change keyword', () => {
  const { result } = setup()

  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
  const { result } = setup({
    initKeyword: 'spiderman'
  })

  expect(result.current.keyword).toBe('spiderman')
})
