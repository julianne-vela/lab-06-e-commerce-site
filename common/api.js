import { rawProducts } from '../data/product-data.js';

const PRODUCTS_KEY = 'PRODUCTS';

export function getCart() {
    return JSON.parse(localStorage.getItem('CART') || '[]');
}

export const getInventory = () => {
    // check local storage to see if products exist in inventory
    let products = localStorage.getItem(PRODUCTS_KEY);

    // if there are no products currently in storage or products is string of null
    if (!products) {
        // seed data into localStorage
        products = JSON.stringify(rawProducts);

        localStorage.setItem(PRODUCTS_KEY, products);
    }

    const parsedProducts = JSON.parse(products);

    return parsedProducts;
};

const CART = 'CART'; // magic string for localStorage
const emptyCart = [];

export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(emptyCart));
}

export function setCart(cart) {
    localStorage.setItem('CART', JSON.stringify(cart));
}
export function addProduct(newProduct) {
    let parsedInventory = getInventory();
    parsedInventory.push(newProduct);
    const stringyInventory = JSON.stringify(parsedInventory);
    localStorage.setItem('PRODUCTS', stringyInventory);
    let finalInventory = getInventory();
    return finalInventory;
}


