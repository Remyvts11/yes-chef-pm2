// assets/scripts/style.js
const recipes = {
  prawn: ["oliveOil","prawns"],
  patatas: ["oliveOil", "potatoes", "salt"],
  salad: ["chicken", "lettuce", "saladDressing", "tomatoes"],
  pizza: ["cheese", "ham", "pizzaBase", "salami", "tomatoSauce"]
};

function startGame(recipeName) {
  // Clear the existing selectedRecipe item (good practice)
  localStorage.removeItem("selectedRecipe");

  // Set the new selectedRecipe item
  localStorage.setItem("selectedRecipe", JSON.stringify(recipes[recipeName]));

  // NOW, navigate to the fridge page
  window.location.href = "fridge.html"; // Assuming fridge.html is in the same directory
}

