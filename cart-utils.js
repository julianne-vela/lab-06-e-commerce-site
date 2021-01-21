import { findById } from './utils.js';

const CART = 'CART'; // magic string for localStorage
const emptyCart = [];

export function getCart() {
    const storedCart = localStorage.getItem(CART);

    if (storedCart) {
        // is present, parse it
        return JSON.parse(storedCart);
    } else {
        // is not present, initialze the default empty cart
        const storedEmptyCart = localStorage.setItem(CART, JSON.stringify(emptyCart));

        return storedEmptyCart;
    }
}

export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(emptyCart));
}

export function addToCart(id) {
    // Get cart from localStorage
    const cart = getCart();

    // Check if an item with this id is already in the cart.
    const itemInCart = findById(id, cart);
    if (!itemInCart) {
        // if not, initialize one. 
        const initializedCartItem = {
            id: id,
            quantity: 1
        };

        cart.push(initializedCartItem);
    } else {
        // if so -- increment the quantity
        itemInCart.quantity++;
    }

    setCart(cart);

}