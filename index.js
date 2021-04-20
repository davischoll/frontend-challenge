const express  = require('express')
const nunjucks = require('nunjucks')
const path     = require('path')

const server = express()

const { pageLanding, pageMail } = require(path.join(__dirname, 'src/pages'))

nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
  .use(express.urlencoded({ extended: true }))
  .set("view engine", "njk")
  .set('views', path.join(__dirname, 'src/views'))
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', pageLanding)
  .get('/email', pageMail)
  .listen(3000 || process.env.PORT, err => {
    if (err)
      console.log('Could not start the server.')
    else
      console.log('Server is online!')
  })
  