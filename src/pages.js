const pageLanding = (req, res) => {
  res.render('index.html')
}

const pageMail = (req, res) => {
  res.render('email.html')
}

module.exports = {
  pageLanding,
  pageMail
}
