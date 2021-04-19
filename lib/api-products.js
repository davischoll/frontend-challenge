const axios = require('axios')

const getUrl = page => `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
const getProductsApi = (page) => axios.get(getUrl(page))
const extractProducts = res => res.data.products

const getProducts = async() => {
  try {
    const res = await getProductsApi('1')
    const products = extractProducts(res)
    return products
  } catch (err) {
    console.log('Não foi possível obter a lista de produtos! Tente novamente mais tarde...')
  }
}

module.exports = {
  getProducts,
  extractProducts,
  getProducts
}
