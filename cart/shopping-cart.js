import { clearCart, getCart } from '../cart-utils.js';
import { productsArr } from '../data/product-data.js';
import {
    renderLineItems,
    findById,
    calcOrderTotal,
    toUSD,
} from '../utils.js';

const table = document.querySelector('tbody');
const placeOrderButton = document.querySelector('#place-order');
const orderTotalCell = document.querySelector('#order-total');

const currentCart = getCart();

for (let item of currentCart) {
    const product = findById(item.id, productsArr);
    const tableRowDOM = renderLineItems(item, product);

    table.append(tableRowDOM);
}

const orderTotal = calcOrderTotal(currentCart, productsArr);
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


