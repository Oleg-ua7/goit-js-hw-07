const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLi = item => {
  const liRef = document.createElement('li');
  liRef.textContent = item;

  return liRef;
};

const listArray = ingredients.map(ingridient => createLi(ingridient));
const ulListRef = document.querySelector('#ingredients');
ulListRef.append(...listArray);


