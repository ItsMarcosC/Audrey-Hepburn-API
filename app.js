const express = require('express')
const app = express()
const PORT = process.env.PORT || 3025

app.get('/', (req, res) => {
  res.send('Welcome to the Audrey Hepburn API!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})