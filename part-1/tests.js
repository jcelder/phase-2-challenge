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
