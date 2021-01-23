import {
    toUSD,
    calcItemTotal
} from '../common/utils.js';

function renderLineItems(cartItem, product) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');
    tr.classList.add('cart-item');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = product.name;
    quantityTd.textContent = quantity;
    quantityTd.classList.add = 'quantity';
    priceTd.textContent = toUSD(product.price);
    priceTd.classList.add = 'price';
    totalTd.textContent = toUSD(calcItemTotal(cartItem, product));
    totalTd.classList.add = 'total';

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}

export default renderLineItems;
