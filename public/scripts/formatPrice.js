/**
 * Formats the price value to the Brazilian
 * Real currency format with 'R$'
 * 
 * @param {float} value - The price value to be formatted
 * @returns numeric string
 */
const formatPriceNumber = value => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

module.exports = {
  formatPriceNumber
}
