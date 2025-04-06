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
  
  
  
  // Store the selected recipe ingredients in localStorage
  
  const selectedIngredients = recipes[recipeName]; // Now 'recipes' should be accessible
  
  localStorage.setItem("selectedRecipe", JSON.stringify(selectedIngredients));
  
  
  
  // Optionally, store the recipe name as well
  
  localStorage.setItem("selectedRecipeName", recipeName);
  
  
  
  // Navigate to the recipe display page
  
  window.location.href = `recipeDisplay.html?recipe=${recipeName}`;
  
  }