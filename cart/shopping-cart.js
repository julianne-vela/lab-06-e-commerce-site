import { cart } from '../data/cart-data.js';
import { productsArr } from '../data/product-data.js';
import {
    renderLineItems,
    calcItemTotal,
    findById,
} from '../utils.js';

const table = document.querySelector('tbody');

for (let item of cart) {
    const product = findById(item.id, productsArr);
    const tableRowDOM = renderLineItems(item, product);

    table.append(tableRowDOM);
}

// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// td2.textContent = 'Order Total';
// td3.textContent = 