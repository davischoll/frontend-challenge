const apiProducts = require('./api-products')

let nrPage = 2

const showMoreProducts = async() => {

  const products = await apiProducts.getProducts(nrPage)

  products.forEach(product => {
    const productCard = document.createElement('li')
    productCard.classList.add('product-item')

    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div>
      <h3 class="product-item-name">${product.name}</h3>
      <p class="product-item-description">${product.description}</p>
      <p class="product-item-price">De: R$${product.oldPrice}</p>
      <p class="product-item-price-bigger">Por: R$${product.price}</p>
      <p class="product-item-price">ou ${product.installments.count}x de R$${product.installments.value}</p>
      <a href="#" class="product-item-buy-button">Comprar</a>
    </div>
  `
  document.querySelector('#product-list').appendChild(productCard)
  });

  nrPage++
}

document.querySelector('#more-products').addEventListener('click', showMoreProducts)