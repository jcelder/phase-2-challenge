#!/usr/local/bin/node

const fs = require('fs')

const data = JSON.parse(fs.readFileSync('clients.json'))
const state = process.argv[2]
const matchingData = []
console.log(`Finding clients in state "${state}"`)
data.forEach((rep) => {
  if (rep.state === state) matchingData.push({ id: rep.id, rep_name: rep.rep_name, company: rep.company, city: rep.city, state: rep.state })
})

if (matchingData.length > 0) console.log(matchingData)
else console.log(`No clients found in state "${state}"`)
