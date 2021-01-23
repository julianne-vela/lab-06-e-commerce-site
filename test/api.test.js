// ~ TESTING TEMPLATE ~
// test('Should do this when given this.', (expect) => {
//     const expected = EXPECTED;

//     const actual = function(toTest) {

//     };

//     expect.equal(actual, expected);
// });

import { addProduct } from '../common/api.js';
// const rawProducts = [
//     {
//         id: 1,
//         name: 'Polymer Set - Purple Moonstone',
//         image: 'p-dice-purple.jpg',
//         description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
//         category: 'polymer-dice',
//         price: 9.95
//     },
//     {
//         id: 2,
//         name: 'Polymer Set - Pride',
//         image: 'p-dice-pride.png',
//         description: 'A special Pride edition set of 7 RPG dice including a d3, d4, d6, d8, d10, d12 and d20. Proceeds go to support LGBTQ+ advocacy groups!',
//         category: 'polymer-dice',
//         price: 6.95
//     },
//     {
//         id: 3,
//         name: 'Polymer Set - Andromeda Galaxy',
//         image: 'p-dice-galaxy.jpg',
//         description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
//         category: 'polymer-dice',
//         price: 9.95
//     },
//     {
//         id: 4,
//         name: 'Polymer Set - Crimson Embers',
//         image: 'p-dice-crimson.png',
//         description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
//         category: 'polymer-dice',
//         price: 9.95
//     },
//     {
//         id: 5,
//         name: 'Polymer Set - Antique Bone',
//         image: 'p-dice-bone.png',
//         description: 'A set of 7 Polymer RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
//         category: 'polymer-dice',
//         price: 9.95
//     },
//     {
//         id: 6,
//         name: 'Metal Set - Golden Aqua',
//         image: 'm-dice-aqua.jpg',
//         description: 'A set of 7 Metal RPG dice including a d3, d4, d6, d8, d10, d12 and d20.',
//         category: 'metal-dice',
//         price: 11.95
//     },
// ];

const test = QUnit.test;

test('Should add a new product to inventory as the last item in localStorage', assert => {
    const newProduct = {
        id: 'ms17',
        name: 'Extra Mysterious Bag',
        description: 'A glorious bag of holding that is so deep you don\'t even know what is in it. You just HAVE to get one!',
        image: '.ext-mystery-bag.png',
        price: 25.00
    };

    const newArray = addProduct(newProduct);
    // test failing here - Source: 	
    // TypeError: Cannot read property 'length' of undefined
    const lastArrayItem = newArray[newArray.length - 1];

    assert.deepEqual(lastArrayItem, newProduct);
});