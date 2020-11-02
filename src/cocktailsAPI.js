"use strict";

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  .then(response => {
    console.log(response);
    console.log(response.ok);
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.drinks.forEach(drink => {
        const dataDrinkName = drink.strDrink;
        const dataIngredient1 = drink.strIngredient1;
        const dataIngredient2 = drink.strIngredient2;
        const dataIngredient3 = drink.strIngredient3;
        const dataIngredient4 = drink.strIngredient4;


        const dataImage = drink.strDrinkThumb;

        const drinkNameH3 = document.createElement("h3");
        const ingredientP1 = document.createElement("p");
        const ingredientP2 = document.createElement("p");
        const ingredientP3 = document.createElement("p");
        const ingredientP4 = document.createElement("p");

        const drinkImg = document.createElement("img");

        drinkNameH3.innerHTML = dataDrinkName;
        ingredientP1.innerHTML = dataIngredient1;
        ingredientP2.innerHTML = dataIngredient2;
        ingredientP3.innerHTML = dataIngredient3;
        ingredientP4.innerHTML = dataIngredient4;
        drinkImg.setAttribute("src", dataImage);
        drinkImg.width = "300";  // todo: kill
        drinkImg.height = "300";  // todo: kill

        const drinkArticle = document.createElement("article");
        drinkArticle.setAttribute("class", "drink");
        drinkArticle.appendChild(drinkNameH3);
        drinkArticle.appendChild(ingredientP1);
        drinkArticle.appendChild(ingredientP2);
        drinkArticle.appendChild(ingredientP3);
        drinkArticle.appendChild(ingredientP4);
        drinkArticle.appendChild(drinkImg);

        const drinksDiv = document.getElementById("drinks");
        drinksDiv.appendChild(drinkArticle);
    });
  })
  .catch(err => {
    console.log(err);
  });