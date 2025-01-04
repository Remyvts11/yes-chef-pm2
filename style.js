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


selectButtons.forEach(button => {
  button.addEventListener('click', () => {
    

    const selectButtons = document.querySelectorAll('.select-button');

    selectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const recipeTitle = button.getAttribute('data-recipe-title'); 
        localStorage.setItem('selectedRecipe', recipeTitle); 
        window.location.href = 'salade-rc.html'; 
      });
    });