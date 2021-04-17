const pageLanding = (req, res) => {
  res.render('home.html')
}

const pageMail = (req, res) => {
  res.render('email.html')
}

module.exports = {
  pageLanding,
  pageMail
}
