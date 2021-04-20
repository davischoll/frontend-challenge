const apiProducts = require('../public/scripts/api-products')

const pageLanding = async(req, res) => {
  const products = await apiProducts.getProducts('1')
  res.render('home.html', { products })
}

const pageMail = (req, res) => {
  res.render('email.html')
}

module.exports = {
  pageLanding,
  pageMail
}
