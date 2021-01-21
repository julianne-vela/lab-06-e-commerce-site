import { clearCart, getCart } from '../cart-utils.js';
import { cart } from '../data/cart-data.js';
import { productsArr } from '../data/product-data.js';
import {
    renderLineItems,
    findById,
    calcOrderTotal,
} from '../utils.js';

const table = document.querySelector('tbody');
const placeOrderButton = document.querySelector('#place-order');
const orderTotalCell = document.querySelector('#order-total');

const currentCart = getCart();

for (let item of cart) {
    const product = findById(item.id, productsArr);
    const tableRowDOM = renderLineItems(item, product);

    table.append(tableRowDOM);
}

const orderTotal = calcOrderTotal(cart, productsArr);
orderTotalCell.textContent = `$${orderTotal}`;

if (currentCart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        clearCart();
    });
}

