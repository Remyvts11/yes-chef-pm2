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

//store recipes in local storage 
function startGame(recipe) {
  const recipes = {
    prawn: ["prawns", "olive oil"],
    patatas: ["potatoes", "salt", "oil"],
    salad: ["lettuce", "tomatoes", "salad", "chicken"],
    pizza: ["cheese", "tomato sauce", "pizza base", "ham", "salami"]
  };

  localStorage.setItem('selectedRecipe', JSON.stringify(recipes[recipe]));
  location.href = 'fridge.html';
}
