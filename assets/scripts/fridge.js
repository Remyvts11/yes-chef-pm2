// Retrieve the selected recipe from localStorage
let selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));
console.log("Stored recipe ingredients:", selectedRecipe);

// Normalize recipe ingredients (to lowercase with no spaces)
selectedRecipe = selectedRecipe.map(ing => ing.toLowerCase().replace(/\s+/g, ''));

let selectedIngredients = [];

const fridgeIngredients = document.querySelectorAll('.fridge-ingredient');

fridgeIngredients.forEach((ingredientElement) => {
  ingredientElement.addEventListener('click', () => {
    ingredientElement.classList.toggle('selected');
    const ingredientName = ingredientElement.querySelector('.ingredient-name').textContent;
    const normalizedName = ingredientName.toLowerCase().replace(/\s+/g, '');

    if (ingredientElement.classList.contains('selected')) {
      selectedIngredients.push(normalizedName);
    } else {
      const index = selectedIngredients.indexOf(normalizedName);
      if (index > -1) {
        selectedIngredients.splice(index, 1);
      }
    }
  });
});

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  // Reset and re-populate selectedIngredients
  selectedIngredients = [];
  fridgeIngredients.forEach((ingredientElement) => {
    if (ingredientElement.classList.contains("selected")) {
      const ingredientName = ingredientElement.querySelector(".ingredient-name").textContent.toLowerCase().replace(/\s+/g, '');
      selectedIngredients.push(ingredientName);
    }
  });

  if (selectedIngredients.length === 0) {
    alert("Please select some ingredients!");
    return;
  }

  // Sort for comparison
  const sortedSelected = selectedIngredients.slice().sort();
  const sortedCorrect = selectedRecipe.slice().sort();

  console.log("Selected:", sortedSelected);
  console.log("Correct:", sortedCorrect);

  // Compare arrays
  const isCorrect = sortedCorrect.length === sortedSelected.length &&
                    sortedCorrect.every((val, index) => val === sortedSelected[index]);

  if (isCorrect) {
    alert("🎉 Congratulations! You selected all the correct ingredients.");
  } else {
    alert("❌ Oops! You missed some ingredients or picked the wrong ones.");
  }
});