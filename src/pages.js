const apiProducts = require('../public/scripts/api-products')

const pageLanding = (req, res) => {
  res.render('home.html')
}

const pageMail = async (req, res) => {
  products = await apiProducts.getProducts('1')
  res.render('email.html', { products })
}

module.exports = {
  pageLanding,
  pageMail
}
