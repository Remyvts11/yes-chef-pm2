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

function handleIngredientSelection(maxIngredients, requiredIngredients = []) {
  const ingredientItems = document.querySelectorAll('.ingredient-item');
  let selectedIngredients = 0; 

  ingredientItems.forEach(item => {
    const ingredientName = item.querySelector('.ingredient-name').textContent;

    item.addEventListener('click', () => {
      if (requiredIngredients.includes(ingredientName)) {
        item.classList.add('selected', 'required');
        selectedIngredients++; 
      } else if (selectedIngredients < maxIngredients) {
        item.classList.toggle('selected'); 
        if (item.classList.contains('selected')) {
          selectedIngredients++;
        } else {
          selectedIngredients--;
        }
      } else {
        alert(`You can only select a maximum of 5 {maxIngredients} ingredients.`);
      }
    });
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.classList.add('submit-button'); 

  submitButton.addEventListener('click', () => {
    // Handle submission logic here (e.g., display selected ingredients)

    // Clear the selection for the next round
    ingredientItems.forEach(item => {
      item.classList.remove('selected'); 
    });
    selectedIngredients = 0; 
  });

  // Append the submit button to the page
  document.querySelector('.ingredient-shelf').after(submitButton);
}

// Call the function for each recipe with its specific parameters
handleIngredientSelection(2 ['Prawns', 'Olive Oil']); 
handleIngredientSelection(3 ['Potatoes', 'Salt', 'Olive Oil']); 
handleIngredientSelection(4 ['Lettuce', 'Tomato', 'Salad Dressing', 'Chicken']); 
handleIngredientSelection(5 ['Pizza Base', 'Tomato Sauce', 'Cheese', 'Ham', 'Salami']); 