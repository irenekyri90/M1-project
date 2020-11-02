"use strict";

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(response => {
    console.log(response);
    console.log(response.ok);
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.drinks.forEach(drink => {
        const dataDrinkName = drink.strDrink;
        const dataIngredient = drink.strIngredient1;
        const dataImage = drink.strDrinkThumb;

        const drinkNameH3 = document.createElement("h3");
        const ingredientDiv = document.createElement("div");
        const drinkImg = document.createElement("img");

        drinkNameH3.innerHTML = dataDrinkName;
        ingredientDiv.innerHTML = dataIngredient;
        drinkImg.setAttribute("src", dataImage);
        drinkImg.width = "300";  // todo: kill
        drinkImg.height = "300";  // todo: kill

        const drinkArticle = document.createElement("article");
        drinkArticle.setAttribute("class", "drink");
        drinkArticle.appendChild(drinkNameH3);
        drinkArticle.appendChild(ingredientDiv);
        drinkArticle.appendChild(drinkImg);

        const drinksDiv = document.getElementById("drinks");
        drinksDiv.appendChild(drinkArticle);
    });
  })
  .catch(err => {
    console.log(err);
  });