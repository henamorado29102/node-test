const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Henrry Enamorado Dieguez how are you today!')
})

app.get('/second', function (req, res) {
  res.send('add a second end point!!')
})

app.get('/third', function (req, res) {
  res.send('add a third end point!!!!')
})
app.listen(3000)
