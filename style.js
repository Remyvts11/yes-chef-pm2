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
 
 // Get all ingredient items and submit button
 const ingredientItems = document.querySelectorAll('.ingredient-item');
 const submitButton = document.getElementById('submit-button');
 
 
 let selectedIngredients = [];
 
import 
const recipes {
  "prawn": ["Prawns", "Olive Oil"],
  "patatas": ["Potatoes", "Olive Oil", "Salt"],
  "salad": ["Lettuce", "Tomatoes", "Salad Dressing", "Chicken"],
  "pizza": ["Pizza Base", "Tomato Sauce", "Cheese", "Salami", "Ham"]
 };
 
 
 // Get the selected recipe from localStorage
 const selectedRecipe = localStorage.getItem('selectedRecipe');
 
 
 // Get the recipe ingredients based on the selected recipe
 let recipeIngredients = [];
 if (selectedRecipe) {
  recipeIngredients = recipes[selectedRecipe];
 }
 
 
 ingredientItems.forEach(ingredientItem => {
  ingredientItem.addEventListener('click', () => {
    ingredientItem.classList.toggle('selected');
 
 
    if (ingredientItem.classList.contains('selected')) {
      selectedIngredients.push(ingredientItem.querySelector('.ingredient-name').textContent);
    } else {
      selectedIngredients = selectedIngredients.filter(ingredient => ingredient !== ingredientItem.querySelector('.ingredient-name').textContent);
    }
  });
 });
 
 
 submitButton.addEventListener('click', () => {
  if (selectedIngredients.length === 0) {
    alert('Please select some ingredients!');
    return;
  }
 
 
  // Check selected ingredients against the actual recipe ingredients
  const correctIngredients = selectedIngredients.filter(ingredient => recipeIngredients.includes(ingredient));
 
 
  if (correctIngredients.length === recipeIngredients.length) {
    alert('Congratulations! You selected all the correct ingredients.');
    // Handle success scenario (e.g., move to next level)
  } else {
    alert('Oops! You missed some ingredients. Try again!');
    // Handle failure scenario (e.g., reset selection)
  }
 });
 

