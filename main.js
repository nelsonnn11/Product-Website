const addToCartBtn = document.getElementById('addToCartBtn');
const removeFromCartBtn = document.getElementById('removeFromCartBtn');
const cartItemCount = document.getElementById('cartItemCount');
const cartDisplay = document.getElementById('cartDisplay');

let cartItemsCount = 0;
let cartContent = '';

// Function to update cart count and display
function updateCart() {
  cartItemCount.textContent = cartItemsCount;
  if (cartItemsCount === 0) {
    cartContent = 'No items added to cart';
  } else {
    cartContent = `${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in cart`;
  }
  cartDisplay.textContent = cartContent;
}

// Add to cart button click event
addToCartBtn.addEventListener('click', () => {
  cartItemsCount++;
  updateCart();
});

// Remove from cart button click event
removeFromCartBtn.addEventListener('click', () => {
  if (cartItemsCount > 0) {
    cartItemsCount--;
    updateCart();
  }
});