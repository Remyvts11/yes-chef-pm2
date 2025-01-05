function startGame(recipe) {
    localStorage.setItem("selectedRecipe", recipe); 

    window.location.href = "fridge.html"; 
}

//recipe cards clickability
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active'); 
  });
});

//fridge ingredients interactivity
const button = document.getElementById('myButton');
  let clickCount = 0;
  const correctIngredients = ['flour', 'sugar', 'eggs', 'butter']; // Array of correct ingredients

  button.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 4) {
      // Check if all ingredients are correct
      const allCorrect = correctIngredients.every(ingredient => document.documentElement.textContent.includes(ingredient));

      if (allCorrect) {
        // Redirect to another page on all correct clicks
        window.location.href = 'your_target_page.html'; 
      } else {
        button.style.backgroundColor = 'red'; // Indicate incorrect selection
      }
    } else {
      button.style.backgroundColor = 'blue'; // Button remains active for 3 clicks
    }
  });
