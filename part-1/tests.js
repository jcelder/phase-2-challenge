// tests.js
const expect = require('chai').expect;

describe('weekday', function () {
    const weekday = require('./functions.js').weekday
  it('should return "Mon" when passed September 11th, 2017', () => {
    const date = new Date(2017, 8, 11)
    expect(weekday(date)).to.equal('Mon')
  })
  it('should return "Invalid Date or No Date Object Passed" when a date object isnt passed as an argument', () => {
    const date = 'cheese'
    expect(weekday(date)).to.equal('Invalid Date or No Date Object Passed')
  })
  it('should return "Invalid Date or No Date Object Passed" when nothing is passed as an argument', () => {
    expect(weekday()).to.equal('Invalid Date or No Date Object Passed')
  })
})

describe('snippet', function () {
  const snippet = require('./functions.js').snippet
  it('should return "This is a..." when passed "This is a test" and 9 as arguments', () => {
    expect(snippet('This is a test', 9)).to.equal('This is a...')
  })
  it('should return "This is a test" when passed "This is a test" and 20 as arguments', () => {
    expect(snippet("This is a test", 20)).to.equal('This is a test')
  })
  it('should return "Invalid string or length" when passed 1 and 20 as arguments', () => {
    expect(snippet(1,20)).to.equal('Invalid string or length')
  })
})

describe('numProps', function () {
  const numProps = require('./functions.js').numProps
  it('should return 3 when passed the test object', () => {
    const test = { a: 1, b: 2, c: 3 }
    expect (numProps(test)).to.equal(3)
  })
})
