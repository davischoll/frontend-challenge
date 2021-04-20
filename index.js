const express  = require('express')
const nunjucks = require('nunjucks')
const path     = require('path')

const { pageLanding, pageMail } = require(path.join(__dirname, 'src/pages'))

const app = express()

nunjucks.configure('src/views', {
  express: app,
  noCache: true
})

app.use(express.urlencoded({ extended: true }))
   .use(express.static(path.join(__dirname, 'public')))
   .set("view engine", "njk")
   .set('views', path.join(__dirname, 'src/views'))

app.get('/', pageLanding)
   .get('/email', pageMail)

app.listen(3000 || process.env.PORT, err => {
    if (err)
      console.log('Could not start the server.')
    else
      console.log('Server is online!')
  })
