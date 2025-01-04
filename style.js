function startGame(recipe) {
    localStorage.setItem("selectedRecipe", recipe); 

    window.location.href = "game.html"; 
}

//recipe cards clickability
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active'); 
  });
});
