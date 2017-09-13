// tests.js
const expect = require('chai').expect;

describe('weekday', function () {
  it('should return "Mon" when passed September 11th, 2017', () =>{
    const weekday = require('./functions.js').weekday
    const date = new Date(2017, 9, 11)
    expect(weekday(date)).to.equal('Mon')
  })
})
