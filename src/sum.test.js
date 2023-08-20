import { expect, test } from 'vitest'
import { sum, multiply } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})


test('mutilpies 8 * 2 to equal 16', () => {
expect(multiply(8, 2)).toBe(16)
})
