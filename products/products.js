import { productsArr } from '../data/product-data.js';
import { renderProduct } from '../utils.js';

const list = document.getElementById('product-list');

for (let product of productsArr) {
    const productElement = renderProduct(product);

    list.append(productElement);
}
