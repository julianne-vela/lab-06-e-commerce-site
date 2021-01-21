import {
    findById,
    renderProduct,
    calcItemTotal,
    renderLineItems
} from '../utils.js';

const test = QUnit.test;

test('Should return a complete product listing as an li when given a product', (expect) => {
    const purplePolyDice = {
        id: 1,
        name: 'RPG Set - Purple Moonstone',
        image: 'p-dice-purple.jpg',
        description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
        category: 'polymer-dice',
        price: 9.95
    };

    const htmlStatic = `<li class="item"><h3 class="name">RPG Set - Purple Moonstone</h3><img class="product-image" src="../assets/pictures/p-dice-purple.jpg" alt="A photo of a purple and white RPG style dice set."><p class="description">A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.</p><p class="price">$9.95</p><button value="1">Add to cart</button></li>`;

    const actual = renderProduct(purplePolyDice);

    expect.equal(actual.outerHTML, htmlStatic);
});

test('findById should take in 2 and the productsArr array and return the Polymer Set - Pride item', (expect) => {
    const productsArr = [
        {
            id: 1,
            name: 'Polymer Set - Purple Moonstone',
            image: 'p-dice-purple.jpg',
            description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'polymer-dice',
            price: 9.95
        },
        {
            id: 2,
            name: 'Polymer Set - Pride',
            image: 'p-dice-pride.png',
            description: 'A special Pride edition set of 7 RPG dice including a d3, d4, d6, d8, d10, d12 and d20. Proceeds go to support LGBTQ+ advocacy groups!',
            category: 'polymer-dice',
            price: 6.95
        },
        {
            id: 3,
            name: 'Polymer Set - Andromeda Galaxy',
            image: 'p-dice-galaxy.jpg',
            description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'polymer-dice',
            price: 9.95
        },
        {
            id: 4,
            name: 'Polymer Set - Crimson Embers',
            image: 'p-dice-crimson.png',
            description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'polymer-dice',
            price: 9.95
        },
        {
            id: 5,
            name: 'Polymer Set - Antique Bone',
            image: 'p-dice-bone.png',
            description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'polymer-dice',
            price: 9.95
        },
        {
            id: 6,
            name: 'Metal Set - Golden Aqua',
            image: 'm-dice-aqua.jpg',
            description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'metal-dice',
            price: 11.95
        },
        {
            id: 7,
            name: 'Metal Set - Sinister Emerald',
            image: 'm-dice-emerald.jpg',
            description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'metal-dice',
            price: 11.95
        },
        {
            id: 8,
            name: 'Metal Set - Deadly Nightshade',
            image: 'm-dice-nightshade.jpg',
            description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'metal-dice',
            price: 11.95
        },
        {
            id: 9,
            name: 'Metal Set - Ominous Nightfall',
            image: 'm-dice-nightfall.jpg',
            description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'metal-dice',
            price: 11.95
        },
        {
            id: 10,
            name: 'Metal Set - Rising Phoenix',
            image: 'm-dice-phoenix.jpg',
            description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
            category: 'metal-dice',
            price: 11.95
        },
        {
            id: 11,
            name: 'Magnetic Dice Tray - Black',
            image: 'mag-rect-tray-black.png',
            description: 'A magnetic rectangular dice tray with a soft black felt lining.',
            category: 'containers',
            price: 14.95
        },
        {
            id: 12,
            name: 'Magnetic Dice Tray - Teal',
            image: 'mag-rect-tray-teal.jpg',
            description: 'A magnetic rectangular dice tray with a soft teal felt lining.',
            category: 'containers',
            price: 14.95
        },
        {
            id: 13,
            name: 'Magnetic Dice Tray - Green',
            image: 'mag-rect-tray-green.png',
            description: 'A magnetic rectangular dice tray with a soft green felt lining.',
            category: 'containers',
            price: 14.95
        },
        {
            id: 14,
            name: 'Hard Metal Case',
            image: 'metal-case.jpg',
            description: 'A hard metal dice case that is excellent for storing your dice on-the-go!',
            category: 'containers',
            price: 14.95
        },
        {
            id: 15,
            name: 'Medium Dice Bag',
            image: 'med-bag.jpg',
            description: 'A nice medium sized dice bag to hold all your lucky magic balls of fun!',
            category: 'containers',
            price: 14.95
        },
        {
            id: 16,
            name: 'Mystery Bag',
            image: 'mystery-bag.jpg',
            description: 'Oh, how I\'ve piqued your curiosity! Wait...you\'re not a cat, right?',
            category: 'containers',
            price: 14.95
        },
    ];

    const expected = {
        id: 2,
        name: 'Polymer Set - Pride',
        image: 'p-dice-pride.png',
        description: 'A special Pride edition set of 7 RPG dice including a d3, d4, d6, d8, d10, d12 and d20. Proceeds go to support LGBTQ+ advocacy groups!',
        category: 'polymer-dice',
        price: 6.95
    };

    const actual = findById(2, productsArr);

    expect.deepEqual(actual, expected);

});

test('Should return $19.90 when given the quantity of 2 and price of $9.95', (expect) => {
    const product = {
        id: 3,
        name: 'Polymer Set - Andromeda Galaxy',
        image: 'p-dice-galaxy.jpg',
        description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
        category: 'polymer-dice',
        price: 9.95
    };
    const cartItem = {
        id: 3,
        quantity: 2,
    };

    const expected = 19.90;

    const actual = calcItemTotal(cartItem, product);

    expect.deepEqual(actual, expected);
});

test('Should return a table row containing the product name, quantity, and price when given the cartItem and the product.', (expect) => {
    const product = {
        id: 3,
        name: 'Polymer Set - Andromeda Galaxy',
        image: 'p-dice-galaxy.jpg',
        description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
        category: 'polymer-dice',
        price: 9.95
    };
    const cartItem = {
        id: 3,
        quantity: 2,
    };

    const expected = `<tr class="cart-item"><td>Polymer Set - Andromeda Galaxy</td><td>2</td><td>$19.90</td></tr>`;

    const actual = renderLineItems(cartItem, product);

    expect.equal(actual.outerHTML, expected);
});

// 
