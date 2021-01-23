import { addProduct } from '../common/api.js';

const addProductForm = document.getElementById('add-new-product');

addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(addProductForm);

    const newProduct = {
        id: data.get('id'),
        name: data.get('name'),
        image: data.get('image'),
        description: data.get('description'),
        category: data.get('category'),
        price: data.get('price'),
    };

    addProduct(newProduct);

    addProductForm.reset();
});

