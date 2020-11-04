'use strict';

const randomDrinkBtn = document.querySelector('#randomBtn');
randomDrinkBtn.addEventListener("click", function () {
    const rootElement = document.querySelector('#randomDrink');
    rootElement.innerHTML = '';
    populateRandomDrink('randomDrink', function () {
        const randomDrinkContainer = document.querySelector('#random-drink-container');
        randomDrinkContainer.style.display = 'block';
        console.log('yayyyyy!');

        const hideBtn = document.querySelector('#hide');
        hideBtn.style.display = 'block';
    });
});



const testDrinkBtn = document.querySelector('#testBtn');
testDrinkBtn.addEventListener("click", function () {
    const rootElement = document.querySelector('#test');
    rootElement.innerHTML = '';
    populateByIngredient('test', function () {
        const testContainer = document.querySelector('#test-container');
        testContainer.style.display = 'block';


        const searchBar = document.querySelector('#search-bar');
        const searchWord = searchBar.value;
        const testHeading = document.querySelector('#test-heading');
        testHeading.innerHTML = `${searchWord}`;

        const hideBtn = document.querySelector('#hide');
        hideBtn.style.display = 'block';

        const randomDrinkContainer = document.querySelector('#random-drink-container');
        randomDrinkContainer.style.display = 'none';

        console.log('yayyyyy!');
    });
});

const hideBtn = document.querySelector('#hide');
hideBtn.addEventListener('click', function() {
    const randomDrinkContainer = document.querySelector('#random-drink-container');
    randomDrinkContainer.style.display = 'none';

    const testContainer = document.querySelector('#test-container');
    testContainer.style.display = 'none';

    hideBtn.style.display = 'none';

});
