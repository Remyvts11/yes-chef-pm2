// Retrieve the selected recipe from localStorage
const selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

let selectedIngredients = [];

const fridgeIngredients = document.querySelectorAll('.fridge-ingredient');

fridgeIngredients.forEach((ingredientElement) => {
  ingredientElement.addEventListener('click', () => {
    ingredientElement.classList.toggle('selected');
    const ingredientName = ingredientElement.querySelector('.ingredient-name').textContent;
    if(ingredientElement.classList.contains('selected')) {
      selectedIngredients.push(ingredientName);
    } else {
      const index = selectedIngredients.indexOf(ingredientName);
      if(index > -1) {
        selectedIngredients.splice(index, 1);
      }
    }
  });
});

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  if (selectedIngredients.length === 0) {
    alert('Please select some ingredients!');
    return;
  }

  // Check selected ingredients against the actual recipe ingredients
  const correctIngredients = selectedRecipe; //correct ingredients are already stored in local storage.

  if (correctIngredients.length === selectedIngredients.length) {
    alert('Congratulations! You selected all the correct ingredients.');
    // Success scenario
  } else {
    alert('Oops! You missed some ingredients.');
    // Failure scenario
  }
});

