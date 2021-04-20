const axios = require('axios')

const getUrl = nrPage => `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${nrPage}`
const getProductsApi = (nrPage) => axios.get(getUrl(nrPage))
const extractProducts = res => res.data.products

const getProducts = async(nrPage) => {
  try {
    const res = await getProductsApi(nrPage)
    const products = extractProducts(res)
    return products
  } catch (err) {
    console.log('Não foi possível obter a lista de produtos...')
  }
}

module.exports = {
  getProducts,
  extractProducts,
  getProducts
}
