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

//green border when clicked
// Get all ingredient-item elements
const ingredientItems = document.querySelectorAll('.ingredient-item');

// Add click event listener to each ingredient-item
ingredientItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the 'selected' class on the clicked item
    item.classList.toggle('selected'); 
  });
});
