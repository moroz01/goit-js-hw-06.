const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map( ingridient => {

  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingridient;

  return liEl;
});

const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(...elements);
