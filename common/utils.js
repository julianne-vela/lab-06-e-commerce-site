
// FUNCTIONS //
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

export function toUSD(orderTotal) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(orderTotal);
}

