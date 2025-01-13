function startGame(recipe) {
    localStorage.setItem("selectedRecipe", recipe); 

    window.location.href = "fridge.html"; 
}