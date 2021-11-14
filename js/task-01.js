const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories ${categoriesEl.length}`);

categoriesEl.forEach((item) => {
    console.log('Category: ', item.firstElementChild.textContent);
    console.log('Elements: ', item.lastElementChild.children.length)
})