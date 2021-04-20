const apiProducts = require('./api-products')
const { formatPriceNumber } = require('./formatPrice')

const showMoreProducts = async() => {
  const products = await apiProducts.getProducts(nrPage)

  products.forEach(product => {
    let oldPrice = formatPriceNumber(product.oldPrice)
    let price = formatPriceNumber(product.price)
    let value = formatPriceNumber(product.installments.value)

    const productCard = document.createElement('li')
    productCard.classList.add('product-item')

    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div>
      <h3 class="product-item-name">${product.name}</h3>
      <p class="product-item-description">${product.description}</p>
      <p class="product-item-price">De: ${oldPrice}</p>
      <p class="product-item-price-bigger">Por: ${price}</p>
      <p class="product-item-price">ou ${product.installments.count}x de ${value}</p>
      <a href="#" class="product-item-buy-button">Comprar</a>
    </div>
  `
  document.querySelector('#product-list').appendChild(productCard)
  });

  nrPage++
}

let nrPage = 1

document.querySelector('#more-products').addEventListener('click', showMoreProducts)

window.onload = () => {
  document.querySelector('#more-products').click()
}