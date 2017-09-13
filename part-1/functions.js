// functions.js

// weekday(date)
// returns the weekday for a given date object
const weekday = (date) => {
  if (!date || typeof date !== 'object') return 'Invalid Date or No Date Object Passed'
  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  console.log(date.getDay())
  return dayArray[date.getDay()]
}

module.exports = { weekday }
