/*
=========================================================
Name: products.js
Assignment 3
Authors: Joshua Maher (30148153), Yuecheng Sun (30180767)
Submission: Mar 11, 2024
=========================================================
*/

function addToCartAndDisplay(productName, productPrice) {
    var existingItem = document.querySelector('.shopping-cart-items [data-name="' + productName + '"]');
    
    if (existingItem) {
        var quantityElement = existingItem.querySelector('.quantity');
        var quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;

    } else {
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-name', productName);
        
        var itemName = document.createElement('span');
        itemName.textContent = productName;
        
        var itemPrice = document.createElement('span');
        itemPrice.textContent = productPrice;
        
        var itemQuantity = document.createElement('span');
        itemQuantity.textContent = 1;
        itemQuantity.classList.add('quantity');
        
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-item');
        removeButton.addEventListener('click', function() {
            var quantity = parseInt(itemQuantity.textContent);
            if (quantity === 1) {
                cartItem.remove();
            } else {
                itemQuantity.textContent = quantity - 1;
            }
        });

        cartItem.appendChild(itemName);
        cartItem.appendChild(document.createTextNode('\u00A0-\u00A0'));
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(document.createTextNode('\u00A0-\u00A0'));
        cartItem.appendChild(itemQuantity);
        cartItem.appendChild(removeButton);
        
        document.querySelector('.shopping-cart-items').appendChild(cartItem);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            console.log("Add to cart button clicked");
            var productDiv = event.target.closest('.product');
            var productName = productDiv.querySelector('.product-name').textContent;
            var productPrice = parseFloat(productDiv.querySelector('.product-price').textContent.replace('$', ''));
            
            addToCartAndDisplay(productName, productPrice);
            alert(productName + " has been added to the cart");
        });
    });
});




