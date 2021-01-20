import { productsArr } from './data.js';
import { renderProduct } from './render-function.js';

const list = document.getElementById('product-list');

for (let product of productsArr) {
    const productElement = renderProduct(product);

    list.append(productElement);
}

// set event listeners to update state and DOM