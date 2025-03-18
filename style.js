// Function to handle recipe card clicks
//function startGame(recipeName) {
  //localStorage.setItem("selectedRecipe", recipeName);
  //window.location.href = "fridge.html";
 //}
 
 // Get all recipe card elements
 //const recipeCards = document.querySelectorAll('.recipe-card');
 
 // Add click event listeners to each recipe card
 //recipeCards.forEach(card => {
  //card.addEventListener('click', () => {
    //recipeCards.forEach(card => card.classList.remove('active')); // Remove 'active' class from all cards
    //card.classList.add('active'); // Add 'active' class to the clicked card
  //  const recipeName = card.querySelector('h3').textContent.replace(' Recipe', '').toLowerCase();
   // startGame(recipeName);
 // });
// });

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
 // localStorage.setItem('selectedRecipe', JSON.stringify(recipes[recipeCards]));
  //location.href = 'fridge.html';


