import { addToCart } from './cart-utils.js';
const checkoutButton = document.querySelector('.checkout');
const homeButton = document.querySelector('.home');
const productsButton = document.querySelector('.products');

// EVENT HANDLERS //
checkoutButton.addEventListener('click', () => {
    location.href = '../cart/index.html';
});
homeButton.addEventListener('click', () => {
    location.href = '../index.html';
});
productsButton.addEventListener('click', () => {
    location.href = '../products/index.html';
});

// FUNCTIONS //
export function renderProduct(product) {
    const li = document.createElement('li');
    li.classList.add('item');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = product.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('product-image');
    img.src = `../assets/pictures/${product.image}`;
    img.alt = 'A photo of a purple and white RPG style dice set.';
    li.append(img);

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = product.description;
    li.append(p);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${product.price}`;
    li.append(pPrice);

    const quantitySelect = document.createElement('select');
    quantitySelect.name = 'quantity';
    function addQuantitySelector() {
        const option1 = document.createElement('option');
        option1.textContent = '1';
        option1.value = '1';
        const option2 = document.createElement('option');
        option2.textContent = '2';
        option2.value = '2';
        const option3 = document.createElement('option');
        option3.textContent = '3';
        option3.value = '3';
        quantitySelect.add(option1);
        quantitySelect.add(option2);
        quantitySelect.add(option3);
        li.append(quantitySelect);
    }

    addQuantitySelector();

    const addButton = document.createElement('button');
    addButton.value = product.id;
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', () => {
        const addQuantity = quantitySelect.value;
        addToCart(product.id, addQuantity);
        addButton.textContent = 'Added';
    });
    li.append(addButton);
    return li;

}

export function findById(id, array) {
    // iterate through the array
    for (let item of array) {
        // compare our ID to the ID of the item
        if (item.id === id) {
            // If they match, return that item
            return item;
        }
    }
}

export function calcItemTotal(cartItem, product) {
    return cartItem.quantity * product.price;
}
let orderTotal = 0;
export function calcOrderTotal(cart, productsArr) {

    for (let item of cart) {
        const matchingProduct = findById(item.id, productsArr);
        const lineTotal = calcItemTotal(item, matchingProduct);

        orderTotal = orderTotal + lineTotal;
    }

    return orderTotal;
}

export function renderLineItems(cartItem, product) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');
    tr.classList.add('cart-item');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = product.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = toUSD(product.price);
    totalTd.textContent = toUSD(calcItemTotal(cartItem, product));

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}

export function toUSD(orderTotal) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(orderTotal);
}

