const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const ingredientsList = document.querySelector('#ingredients');
  const items = ingredients.map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient
      return li
  }
  )
  
  ingredientsList.append(...items)