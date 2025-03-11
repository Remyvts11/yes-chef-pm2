// 1. Retrieve Selected Recipe Data
const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

if (!selectedRecipe) {
  alert('No recipe selected. Please return to the home page.');
  window.location.href = 'index.html';
}

const correctIngredients = selectedRecipe.ingredients;

// 2. Ingredient Selection Logic
const fridgeIngredients = document.querySelectorAll('.ingredient-button');

fridgeIngredients.forEach((ingredientButton) => {
  ingredientButton.addEventListener('click', () => {
    ingredientButton.parentElement.classList.toggle('selected');
  });
});

// 3. Submission Logic
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
  const selectedIngredients = Array.from(
    document.querySelectorAll('.fridge-ingredient.selected .ingredient-name')
  ).map((element) => element.textContent);

  const isCorrect = checkIngredients(selectedIngredients, correctIngredients);

  if (isCorrect) {
    alert('Congratulations! You got it right!');
  } else {
    alert('Oops! You selected the wrong ingredients.');
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