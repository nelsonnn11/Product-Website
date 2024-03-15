const productImage = document.getElementById('productImage');
const colorSquares = document.querySelectorAll('.color-square');
const productTitle = document.getElementById('productTitle'); 
const outOfStockText = document.getElementById('outOfStockText'); 

colorSquares.forEach(square => {
  square.addEventListener('click', function() {
    // Get the color ID from the square's ID
    const colorID = this.id;

    // Change the image source based on the color ID
    switch (colorID) {
      case 'color1':
        productImage.src = 'img/olive.png';
        productTitle.textContent = 'GolfWang Hat (Olive)'; // Update product title
        outOfStockText.textContent = 'IN STOCK'; // Update out of stock text
        break;
      case 'color2':
        productImage.src = 'img/blue.png';
        productTitle.textContent = 'GolfWang Hat (Blue)'; 
        outOfStockText.textContent = 'FEW REMAINING'; 
        break;
      case 'color3':
        productImage.src = 'img/green.png';
        productTitle.textContent = 'GolfWang Hat (Green)'; 
        outOfStockText.textContent = 'IN STOCK'; 
        break;
      case 'color4':
        productImage.src = 'img/yellow.png';
        productTitle.textContent = 'GolfWang Hat (Yellow)';
        outOfStockText.textContent = 'IN STOCK'; 
        break;
      case 'color5':
        productImage.src = 'img/white.png';
        productTitle.textContent = 'GolfWang Hat (White)';
        outOfStockText.textContent = 'FEW REMAINING'; 
        break;
      case 'color6':
        productImage.src = 'img/brown.png';
        productTitle.textContent = 'GolfWang Hat';      
        outOfStockText.textContent = 'FEW REMAINING'; 
        break;
      default:
        productImage.src = 'img/brown.png';
        productTitle.textContent = 'GolfWang Hat'; 
        outOfStockText.textContent = 'FEW REMAINING'; 
    }
  });
});