import { clearCart, getCart } from '../common/api.js';
import { rawProducts } from '../data/product-data.js';
import {
    findById,
    calcOrderTotal,
    toUSD,
} from '../common/utils.js';

import renderLineItems from './render-line-item.js';

const table = document.querySelector('tbody');
const placeOrderButton = document.querySelector('#place-order');
const orderTotalCell = document.querySelector('#order-total');

const currentCart = getCart();

for (let item of currentCart) {
    const product = findById(item.id, rawProducts);
    const tableRowDOM = renderLineItems(item, product);

    table.append(tableRowDOM);
}

const orderTotal = calcOrderTotal(currentCart, rawProducts);
orderTotalCell.textContent = toUSD(orderTotal);

if (currentCart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        clearCart();
        alert(JSON.stringify(currentCart, true, 2));
        location.href = '../index.html';
    });
}


