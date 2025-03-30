// Get the timer text element
const timerText = document.querySelector('.timer-text');

// Initialize timeLeft to 5 seconds
let timeLeft = 5;

// Start the countdown timer
const timerInterval = setInterval(() => {
  timerText.textContent = timeLeft; // Update the text with the remaining time

  // When the time reaches 0, stop the timer and redirect to fridge.html
  if (timeLeft <= 0) {
    clearInterval(timerInterval);  // Stop the interval once timer is up
    window.location.href = "fridge.html";  // Redirect to the fridge page
  }

  // Decrease the time left by 1 second
  timeLeft--;
}, 1000); // Update every 1 second

