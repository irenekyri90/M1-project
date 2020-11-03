"use strict";

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  .then(response => {
    console.log(response);
    console.log(response.ok);
    return response.json();
  })
  .then(data => {
    console.log(data);
    populateDrinks(data, 'drinks');
  })
  .catch(err => {
    console.log(err);
  });

function populateRandomDrink(rootId, callback) {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(response => {
    console.log(response);
    console.log(response.ok);
    return response.json();
  })
  .then(data => {
    console.log(data);
    populateDrinks(data, rootId);
    callback();
  })
  .catch(err => {
    console.log(err);
  });
}

function populateDrinks(data, rootId) {
  data.drinks.forEach(drink => {
    const dataDrinkName = drink.strDrink;

    const dataMsrIng1 = drink.strMeasure1;
    const dataMsrIng2 = drink.strMeasure2;
    const dataMsrIng3 = drink.strMeasure3;
    const dataMsrIng4 = drink.strMeasure4;
    const dataMsrIng5 = drink.strMeasure5;

    const dataIngredient1 = drink.strIngredient1;
    const dataIngredient2 = drink.strIngredient2;
    const dataIngredient3 = drink.strIngredient3;
    const dataIngredient4 = drink.strIngredient4;
    const dataIngredient5 = drink.strIngredient5;

    const dataInstructions = drink.strInstructions;
    const dataImage = drink.strDrinkThumb;

    const drinkNameH3 = document.createElement("h3");

    const ingredientsUl = document.createElement('ul');

    const instructionsP = document.createElement('p');

    const drinkImg = document.createElement("img");

    drinkNameH3.innerHTML = dataDrinkName;

    instructionsP.innerHTML = dataInstructions;
    drinkImg.setAttribute("src", dataImage);
    drinkImg.width = "300"; // todo: kill
    drinkImg.height = "300"; // todo: kill

    const drinkArticle = document.createElement("article");
    drinkArticle.setAttribute("class", "drink");
    drinkArticle.appendChild(drinkNameH3);

    drinkArticle.appendChild(ingredientsUl);
    ingredientsUl.setAttribute("class", "ingredients");

    let ingredientCount = 5;
    if (dataIngredient1 === null) {
      ingredientCount = 0;
    } else if (dataIngredient2 === null) {
      ingredientCount = 1;
    } else if (dataIngredient3 === null) {
      ingredientCount = 2;
    } else if (dataIngredient4 === null) {
      ingredientCount = 3;
    } else if (dataIngredient5 === null) {
      ingredientCount = 4;
    }

    for (let i = 1; i <= ingredientCount; i++) {
      const ingredientLi = document.createElement('li');
      const dataMsrIng = eval('dataMsrIng' + i);
      const dataIngredient = eval('dataIngredient' + i);
      ingredientLi.innerHTML = `${dataMsrIng} ${dataIngredient}`;
      ingredientsUl.appendChild(ingredientLi);
    }

    drinkArticle.appendChild(instructionsP);
    drinkArticle.appendChild(drinkImg);

    const drinksDiv = document.getElementById(rootId);
    drinksDiv.appendChild(drinkArticle);
  });
}
  