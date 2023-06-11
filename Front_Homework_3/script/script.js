const rootElement = document.querySelector('#root');

function createCocktail ({strDrink, strInstructions, strDrinkThumb}) {
    const recipeElem = document.createElement('p');
    const nameElem = document.createElement('p');
    const imageElem = document.createElement('img');
    const container = document.createElement('div');

    container.classList.add('container');
    nameElem.classList.add('name');
    recipeElem.classList.add('recipe');
    imageElem.classList.add('image');

    imageElem.src = strDrinkThumb;
    recipeElem.textContent = strInstructions;
    nameElem.textContent = strDrink;

    container.append(recipeElem, nameElem, imageElem);
    rootElement.append(container);
}

const getCoctails = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();

    const cocktails = data.drinks.map(({ strDrink, strInstructions,strDrinkThumb }) => ({
    strDrink, strInstructions, strDrinkThumb}));

  cocktails.forEach(cocktailData => createCocktail(cocktailData));
}

getCoctails();




