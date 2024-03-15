document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get input values
      const reviewerName = document.getElementById('reviewerName').value;
      const reviewContent = document.getElementById('reviewContent').value;
  
      // Create new review element
      const reviewItem = document.createElement('li');
      reviewItem.innerHTML = `<strong>${reviewerName}</strong>: ${reviewContent}`;
  
      // Append the review to the reviews list
      reviewsList.appendChild(reviewItem);
  
      // Reset the form
      reviewForm.reset();
    });
  });