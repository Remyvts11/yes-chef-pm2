function startGame(recipe) {
    localStorage.setItem("selectedRecipe", recipe); 

    window.location.href = "fridge.html"; 
}

//recipe cards clickability
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active'); 
  });
});

//fridge ingredients interactivity
const correctImages = ["assets/ingerdients/milk.png", "assets/ingerdients/prawn.jpeg", 
  "assets/ingerdients/olives.jpeg", "assets/ingerdients/salami.jpeg"]; 
const ingredientItems = document.querySelectorAll('.ingredient-item');
let selectedImages = []; 

ingredientItems.forEach(item => {
item.addEventListener('click', () => {
const imgSrc = item.querySelector('img').src;
if (selectedImages.includes(imgSrc)) {
selectedImages = selectedImages.filter(src => src !== imgSrc);
item.classList.remove('selected'); 
} else {
selectedImages.push(imgSrc);
item.classList.add('selected'); 
}

checkAnswer(); 
});
});

function checkAnswer() {
if (selectedImages.length === 4 && 
selectedImages.every(img => correctImages.includes(img))) {
alert("Congratulations! You selected all the correct images."); 
} else if (selectedImages.length === 4) {
alert("Incorrect. Please try again.");
selectedImages = []; 
ingredientItems.forEach(item => item.classList.remove('selected')); 
}
}
//visual clicking the ingredients in fridge.html
const correctImages = ["assets/ingerdients/milk.png", "assets/ingerdients/prawn.jpeg", 
  "assets/ingerdients/olives.jpeg", "assets/ingerdients/salami.jpeg"]; 
const ingredientItems = document.querySelectorAll('.ingredient-item');
let selectedImages = []; 

ingredientItems.forEach(item => {
item.addEventListener('click', () => {
const imgSrc = item.querySelector('img').src;
if (selectedImages.includes(imgSrc)) {
selectedImages = selectedImages.filter(src => src !== imgSrc);
item.classList.remove('selected'); 
} else {
selectedImages.push(imgSrc);
item.classList.add('selected'); 
}

checkAnswer(); 
});
});

function checkAnswer() {
if (selectedImages.length === 4 && 
selectedImages.every(img => correctImages.includes(img))) {
alert("Congratulations! You selected all the correct images."); 
} else if (selectedImages.length === 4) {
alert("Incorrect. Please try again.");
selectedImages = []; 
ingredientItems.forEach(item => item.classList.remove('selected')); 
}
}