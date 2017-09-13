#!/usr/local/bin/node

const fs = require('fs')

const data = JSON.parse(fs.readFileSync('clients.json'))
const name = process.argv[2].toLowerCase()
const matchingData = []
console.log(`Finding clients with name "${process.argv[2]}"...`)
data.forEach((rep) => {
  if (rep.rep_name.toLowerCase().startsWith(name)) matchingData.push({ id: rep.id, rep_name: rep.rep_name })
})

if (matchingData.length > 0) console.log(matchingData)
else console.log(`No clients found with name "${process.argv[2]}"`)
