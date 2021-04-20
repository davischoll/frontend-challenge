const axios = require('axios')

/**
 * Receives the page number and returns the formatted url string
 * 
 * @param {string} nrPage 
 * @returns {string} URL
 */
const getUrl = nrPage => `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${nrPage}`

/**
 * Performs the query to the Api's address and returns a Json object with the data
 * 
 * @param {string} nrPage 
 * @returns {json} Json object
 */
const getProductsApi = (nrPage) => axios.get(getUrl(nrPage))

/**
 * Extract the product list from Json
 * 
 * @param res
 * @returns {array}
 */
const extractProducts = res => res.data.products

/**
 * Consult Api's address and return a list of products with your data
 * 
 * @param {string} nrPage 
 * @returns {array} Products list from API
 */
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
