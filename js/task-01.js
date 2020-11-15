const allItems = categories.querySelectorAll('.item');

allItems.forEach(elem => console.log(`Категория: ${elem.firstElementChild.textContent} 
Количество элементов: ${elem.lastElementChild.childElementCount}`));