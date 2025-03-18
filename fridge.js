// Get the selected recipe from localStorage

const selectedRecipe = localStorage.getItem('selectedRecipe'); 



// Get the recipe ingredients based on the selected recipe

let recipeIngredients = []; 

if (selectedRecipe) { 

  recipeIngredients = recipes[selectedRecipe]; 

}



ingredientItems.forEach(ingredientItem => {

  ingredientItem.addEventListener('click', () => {

    ingredientItem.classList.toggle('selected');



    if (ingredientItem.classList.contains('selected')) {

      selectedIngredients.push(ingredientItem.querySelector('.ingredient-name').textContent);

    } else {

      selectedIngredients = selectedIngredients.filter(ingredient => ingredient !== ingredientItem.querySelector('.ingredient-name').textContent);

    }

  });

});



//to make sure player submits an answer 

submitButton.addEventListener('click', () => {

  if (selectedIngredients.length === 0) {

    alert('Please select some ingredients!');

    return;

  }



  // Check selected ingredients against the actual recipe ingredients

  const correctIngredients = selectedIngredients.filter(ingredient => recipeIngredients.includes(ingredient));



  if (correctIngredients.length === recipeIngredients.length) {

    alert('Congratulations! You selected all the correct ingredients.');

    // Success scenario

  } else {

    alert('Oops! You missed some ingredients.');

    // Failure scenario

  }

});