// Define the recipes object

const recipes = {

  prawn: ["oliveOil", "prawns"],
  
  patatas: ["oliveOil", "potatoes", "salt"],
  
  salad: ["chicken", "lettuce", "saladDressing", "tomatoes"],
  
  pizza: ["cheese", "ham", "pizzaBase", "salami", "tomatoSauce"],
  
  };
  
  
  
  function startGame(recipeName) {
    // Clear the existing selectedRecipe item
    localStorage.removeItem("selectedRecipe");
  
    // Get the ingredients for the selected recipe from the 'recipes' object
    const selectedIngredients = recipes[recipeName];
  
    // Store the selected recipe ingredients in localStorage as a JSON string
    localStorage.setItem("selectedRecipe", JSON.stringify(selectedIngredients));
  
    // Optionally, store the recipe name as well (for use on the recipeDisplay page)
    localStorage.setItem("selectedRecipeName", recipeName);
  
    // Navigate to the recipe display page, passing the recipe name as a parameter
    window.location.href = `recipeDisplay.html?recipe=${recipeName}`;
  }
  
  // Clear the existing selectedRecipe item
  
localStorage.removeItem("selectedRecipe");
