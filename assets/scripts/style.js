function startGame(recipeName) {
  // Clear the existing selectedRecipe item
  localStorage.removeItem("selectedRecipe");

  // Set the new selectedRecipe item
  localStorage.setItem("selectedRecipe", JSON.stringify(recipes[recipeName]));
  location.href = "recipe";
}

//store recipes in local storage
const recipes = {
  prawn: ["oliveOil","prawns"],
  patatas: ["oliveOil", "potatoes", "salt"],
  salad: ["chicken", "lettuce", "saladDressing", "tomatoes"],
  pizza: ["cheese", "ham", "pizzaBase", "salami", "tomatoSauce"]
};