// functions.js

// weekday(date)
// returns the weekday for a given date object
const weekday = (date) => {
  if (!date || typeof date !== 'object') return 'Invalid Date or No Date Object Passed'
  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  console.log(date.getDay())
  return dayArray[date.getDay()]
}

// snippet(string, length)
// returns a string shortened to length plus ... for a given string and length
const snippet = (string, length) => {
  if (!string || !length || typeof string !== 'string' || typeof length !== 'number') return 'Invalid string or length'
  if (string.length <= length) return string;
  return `${string.slice(0, length)}...`
}

// numProps(object)
// returns the number of enumerable and non-inherited properties on an object
const numProps = (input) => {
  if (!input) return 'Invalid Argument'
  return Object.keys(input).length
}

// filterBetween(array, min, max)
// returns an array whose values fall between the min and max arguments
const filterBetween = (array, min, max) => {
  if (!array || !min || !max) return 'Invalid Argument: One or more arguments not passed'
  if (!(Array.isArray(array))) return 'Invalid Argument: Not an array'
  return array.filter((num) => num >= min && num <= max)
}
module.exports = { weekday, snippet, numProps, filterBetween }
