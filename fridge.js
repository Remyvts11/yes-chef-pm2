const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe')); // Or sessionStorage

if (!selectedRecipe) {
  // Handle case where no recipe was selected (e.g., redirect to home)
  alert('No recipe selected. Please return to the home page.');
  window.location.href = 'index.html'; // Redirect to home page
}

const correctIngredients = selectedRecipe.ingredients;

// 2. Ingredient Selection Logic
const fridgeIngredients = document.querySelectorAll('.fridge-ingredient'); // Replace with your class

fridgeIngredients.forEach((ingredientElement) => {
  ingredientElement.addEventListener('click', () => {
    ingredientElement.classList.toggle('selected'); // Toggle green border
  });
});

// 3. Submission Logic
const submitButton = document.getElementById('submitButton'); // Replace with your button ID

submitButton.addEventListener('click', () => {
  const selectedIngredients = Array.from(
    document.querySelectorAll('.fridge-ingredient.selected')
  ).map((element) => element.textContent); // Or whatever data you store.

  // Check if selected ingredients match correct ingredients
  const isCorrect = checkIngredients(selectedIngredients, correctIngredients);

  if (isCorrect) {
    alert('Congratulations! You got it right!');
    // Handle win condition (e.g., redirect to a win page)
  } else {
    alert('Oops! You selected the wrong ingredients.');
    // Handle lose condition (e.g., redirect to a lose page)
  }
});

// 4. Ingredient Checking Function
function checkIngredients(selected, correct) {
  if (selected.length !== correct.length) {
    return false;
  }

  const sortedSelected = selected.slice().sort();
  const sortedCorrect = correct.slice().sort();

  for (let i = 0; i < sortedSelected.length; i++) {
    if (sortedSelected[i] !== sortedCorrect[i]) {
      return false;
    }
  }

  return true;
}