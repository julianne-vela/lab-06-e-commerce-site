import { getInventory } from '../common/api.js';
import renderProduct from './render-product.js';

const parsedProducts = getInventory();

const list = document.getElementById('product-list');


for (let product of parsedProducts) {
    const productElement = renderProduct(product);

    list.append(productElement);
}
