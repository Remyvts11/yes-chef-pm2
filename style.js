function startGame(recipe) {
    // Example: Store the selected recipe in a variable
    localStorage.setItem("selectedRecipe", recipe); 

    // Example: Redirect to the game page
    window.location.href = "game.html"; 
}