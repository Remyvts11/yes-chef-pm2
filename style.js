//store recipes in local storage
  const recipes = {
    prawn: ["prawns", "olive oil"],
    patatas: ["potatoes", "salt", "olive oil"],
    salad: ["lettuce", "tomatoes", "salad dressing", "chicken"],
    pizza: ["pizza base", "tomato sauce", "cheese", "ham", "salami"]
  };
  function startGame(recipeName) {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipes[recipeName]));
    location.href = 'fridge.html';
  }
 

