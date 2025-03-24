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

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  // Reset selectedIngredients before each submission
  selectedIngredients = [];

  // Re-populate selectedIngredients based on the currently selected elements
  fridgeIngredients.forEach((ingredientElement) => {
    if (ingredientElement.classList.contains("selected")) {
      const ingredientName = ingredientElement.querySelector(".ingredient-name").textContent;
      selectedIngredients.push(ingredientName);
    }
  });

  if (selectedIngredients.length === 0) {
    alert("Please select some ingredients!");
    return;
  }

  const correctIngredients = selectedRecipe;
  console.log(selectedRecipe);
  console.log(selectedIngredients);
  console.log(correctIngredients);

  // Sort both arrays before comparison
  const sortedSelected = selectedIngredients.slice().sort(); // Create a copy and sort
  const sortedCorrect = correctIngredients.slice().sort();

  // Check if both arrays have the same length AND the same contents
  console.log(sortedCorrect)
  console.log(sortedSelected)
  if (
    sortedCorrect.length === sortedSelected.length &&
    sortedCorrect.every((ingredient) => sortedSelected.includes(ingredient))
  ) {
    alert("Congratulations! You selected all the correct ingredients.");
    // Success scenario
  } else {
    alert("Oops! You missed some ingredients.");
    // Failure scenario
  }
});

