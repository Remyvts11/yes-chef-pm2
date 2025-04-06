function startGame(selectedRecipe) {
  localStorage.setItem("selectedRecipe", JSON.stringify(recipes[selectedRecipe]));

  // Redirect to specific recipe page
  switch (selectedRecipe) {
    case "prawn":
      location.href = "recipePrawn.html";
      break;
    case "patatas":
      location.href = "recipePatatas.html";
      break;
    case "salad":
      location.href = "recipeSalad.html";
      break;
    case "pizza":
      location.href = "recipePizza.html";
      break;
  }
}
