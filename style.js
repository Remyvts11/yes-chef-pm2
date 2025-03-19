//store recipes in local storage
  const recipes = {
    prawn: ["olive oil","prawns"],
    patatas: ["olive oil", "potatoes", "salt"],
    salad: ["chicken", "lettuce", "salad dressing", "tomatoes"],
    pizza: ["cheese", "ham", "pizza base", "salami", "tomato sauce"]
  };
  
  function startGame(recipeName) {
    // Clear the existing selectedRecipe item
    localStorage.removeItem("selectedRecipe");
  
    // Set the new selectedRecipe item
    localStorage.setItem("selectedRecipe", JSON.stringify(recipes[recipeName]));
    location.href = "fridge.html";
  }

