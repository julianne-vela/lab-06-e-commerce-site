// IMPORT MODULES under test here:
import { renderProduct } from '../products/render-function.js';

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
