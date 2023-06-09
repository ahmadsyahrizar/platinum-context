// const sum = require("./../sum");
import sum from './../sum'

describe('Sum function', () => {
  test('sum function works correctly', () => {
    const res = sum(10, 20)
    expect(res).toEqual(30)
  })

  test("sum function doesn't receive string", () => {
    expect(() => sum('a', 'b')).toThrow('only number allowed')
  })

  test('sum function works well if number to pass in param is only one', () => {
    const res = sum(50)
    expect(res).toEqual(50)
  })
})
