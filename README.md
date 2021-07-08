# Adding local storage

1) Enable the ability to click on products and add them to the cart in localStorage.
    1) Create a button to click
    2) Add an event listener to the button
    3) On click, we should...
        1) Look at the id of the item we clicked on.
        2) We should add/increment the item in the cart.
            1) Check if an item with this id is already in the cart. If so, increment the quantity.
            2) If not, initialize 1 to the cart. 


2) Load the cart from localStorage.
    1) Grab the cart from localStorage and store it in a variable. 
    2) Replace our hard-coded cart with that variable. 