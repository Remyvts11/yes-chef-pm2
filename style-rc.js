setTimeout(() => {
    window.location.href = "fridge.html"; 
  }, 5000); 

  //recipe cards clickability
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active'); 
  });
});

//start timers and make them move
const timerContainer = document.querySelector('.timer-container');
    const timerText = document.querySelector('.timer-text');

    function startTimer() {
      let timeLeft = 5;

      const timerInterval = setInterval(() => {
        timerText.textContent = timeLeft; 

        if (timeLeft <= 0) {
          clearInterval(timerInterval); 
          window.location.href = 'pizza-rc.html', 'salade-rc.html', 'prawn-rc.html', 'patatas-rc.html'; 
        }

        timeLeft--; // Decrement the time
      }, 1000); // Update every 1 second
    }

    // Start the timer automatically when the page loads
    startTimer(); 