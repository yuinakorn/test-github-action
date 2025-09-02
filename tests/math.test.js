import { describe, it, expect } from 'vitest'
import { add } from '../src/math.js'

describe('math', () => {
  it('add works', () => {
    expect(add(1, 2)).toBe(3)
  })
})
