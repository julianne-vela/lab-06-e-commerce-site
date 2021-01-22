import { rawProducts } from '../data/product-data.js';

export function getCart() {
    return JSON.parse(localStorage.getItem('CART') || '[]');
}

export const getInventory = () => {
    const PRODUCTS_KEY = 'PRODUCTS';
    // check local storage to see if products exist in inventory
    let products = localStorage.getItem(PRODUCTS_KEY);

    // if there are no products currently in storage or products is string of null
    if (!products) {
        // seed data into localStorage
        products = localStorage.setItem(PRODUCTS_KEY, JSON.stringify(rawProducts));
    }

    return JSON.parse(products);
};

const CART = 'CART'; // magic string for localStorage
const emptyCart = [];

export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(emptyCart));
}
