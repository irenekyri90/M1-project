'use strict';

const randomDrinkBtn = document.querySelector('#randomBtn');
randomDrinkBtn.addEventListener("click", function () {
    const rootElement = document.querySelector('#randomDrink');
    rootElement.innerHTML = '';
    populateRandomDrink('randomDrink', function () {
        const randomDrinkContainer = document.querySelector('#random-drink-container');
        randomDrinkContainer.style.display = 'block';
        console.log('yayyyyy!');
    });
});