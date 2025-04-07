// Define the recipes object

const recipes = {

  prawn: ["oliveOil", "prawns"],
  
  patatas: ["oliveOil", "potatoes", "salt"],
  
  salad: ["chicken", "lettuce", "saladDressing", "tomatoes"],
  
  pizza: ["cheese", "ham", "pizzaBase", "salami", "tomatoSauce"],
  
  };

  function startGame(recipeName) {
    // Remove any existing selectedRecipe from localStorage
    localStorage.removeItem("selectedRecipe");
  
    // Get the ingredients for the selected recipe
    const selectedIngredients = recipes[recipeName];
  
    // Save the ingredients array to localStorage
    localStorage.setItem("selectedRecipe", JSON.stringify(selectedIngredients));
  
    // Optionally, save the recipe name too, if needed
    localStorage.setItem("selectedRecipeName", recipeName);
  
    // Navigate to the appropriate recipe page (e.g., recipeDisplay-prawn.html)
    window.location.href = `recipe${capitalize(recipeName)}.html`;
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }