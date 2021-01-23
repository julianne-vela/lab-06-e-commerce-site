import { findById } from '../common/utils.js';
import { getCart } from '../common/api.js';


function renderProduct(product) {
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
        addButton.textContent = `${addQuantity} added to cart`;
    });
    li.append(addButton);
    return li;
}

function setCart(cart) {
    localStorage.setItem('CART', JSON.stringify(cart));
}

function addToCart(id, selectedQuantity) {
    // Get cart from localStorage
    const cart = getCart();
    // Check if an item with this id is already in the cart.
    const itemInCart = findById(id, cart);

    const addQuantity = Number(selectedQuantity);

    if (!itemInCart) {
        // if not, initialize one. 
        const initializedCartItem = {
            id: id,
            quantity: addQuantity,
        };

        cart.push(initializedCartItem);
    } else {
        // if so -- increment the quantity
        itemInCart.quantity += addQuantity;
    }

    setCart(cart);

}



export default renderProduct;