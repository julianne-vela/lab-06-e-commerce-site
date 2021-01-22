import { productsArr } from '../data/product-data.js';
import { renderProduct } from '../utils.js';

const list = document.getElementById('product-list');
const checkoutButton = document.querySelector('.checkout');
const homeButton = document.querySelector('.home');

for (let product of productsArr) {
    const productElement = renderProduct(product);

    list.append(productElement);
}

checkoutButton.addEventListener('click', () => {
    location.href = '../cart/index.html';
});
homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});