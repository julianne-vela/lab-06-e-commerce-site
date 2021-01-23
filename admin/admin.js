// Form Submission //
// pull data from form input fields
// store data in newProduct object
// call addProduct function with newProduct

import { addProduct } from '../common/api.js';


// Get a reference to the form
const addProductForm = document.getElementById('add-new-product');

// Subscribe to the submit event
// Don't forget to call event.preventDefault()!
// Create a new FormData object passing in the form
// // Make a new product object from the formData (i.e. form.get)

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
});



// Call your new store addProduct function with the object.
// addProduct(data);

// Reset the form
