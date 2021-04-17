const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const { pageLanding, pageMail } = require('./pages')

nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
.use(express.static("public"))
.get('/', pageLanding)
.get('/email', pageMail)
.listen(3000, err => {
  if (err) {
    console.log('Could not start the server')
  } else {
    console.log('Server is online')
  }
})