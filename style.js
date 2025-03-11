// Function to handle recipe card clicks
function startGame(recipeName) {
  localStorage.setItem("selectedRecipe", recipeName);
  window.location.href = "fridge.html";
 }
 
 // Get all recipe card elements
 const recipeCards = document.querySelectorAll('.recipe-card');
 
 // Add click event listeners to each recipe card
 recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    recipeCards.forEach(card => card.classList.remove('active')); // Remove 'active' class from all cards
    card.classList.add('active'); // Add 'active' class to the clicked card
    const recipeName = card.querySelector('h3').textContent.replace(' Recipe', '').toLowerCase();
    startGame(recipeName);
  });
 });

 //store recipe ingredients
 const recipes = {
  "prawns": {
    name: "Prawns",
    ingredients: ["prawns", "olive oil"],
  },
  "patatas": {
    name: "Patatas",
    ingredients: ["potatoes", "olive oil", "salt"],
  },
  "salade": {
    name: "Salade",
    ingredients: ["lettuce", "tomatoes", "salad dressing", "chicken"],
  },
    "pizza": {
      name: "Pizza",
      ingredients: ["pizza base", "tomato sauce", "ham", "cheese", "salami"],
    },
};
 
 
 

 

