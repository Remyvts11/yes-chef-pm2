const correctIngredients = JSON.parse(localStorage.getItem('selectedRecipe'));

const fridgeIngredients = document.querySelectorAll('.fridge-ingredient');
fridgeIngredients.forEach((ingredientElement) => {
  ingredientElement.addEventListener('click', () => {
    ingredientElement.classList.toggle('selected');
  });
});

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  const selectedIngredients = Array.from(
    document.querySelectorAll('.fridge-ingredient.selected')
  ).map((element) => element.querySelector('.ingredient-name').textContent);

  const isCorrect = checkIngredients(selectedIngredients, correctIngredients);

  if (isCorrect) {
    alert('Congratulations! You got it right!');
  } else {
    alert('Oops! You selected the wrong ingredients.');
  }
});

function checkIngredients(selected, correct) {
  if (selected.length !== correct.length) {
    return false;
  }

  const sortedSelected = selected.slice().sort();
  const sortedCorrect = correct.slice().sort();

  for (let i = 0; i < sortedSelected.length; i++) {
    if (sortedSelected[i] !== sortedCorrect[i]) {
      return false;
    }
  }

  return true;
}