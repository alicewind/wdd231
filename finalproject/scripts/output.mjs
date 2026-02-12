import { recipes } from '../data/recipes.mjs' 

createRecipeCard(recipes);

const allLink = document.querySelector("#all");
const mainLink = document.querySelector("#main");
const dessertLink = document.querySelector("#dessert");
const breadLink = document.querySelector("#bread");
const snackLink = document.querySelector("#snack");

allLink.addEventListener("click", () => {
    createRecipeCard(recipes);
});

mainLink.addEventListener("click", () => {
    createRecipeCard(recipes.filter(recipe => recipe.keyword === 'main'))
});

dessertLink.addEventListener("click", () => {
    createRecipeCard(recipes.filter(recipe => recipe.keyword === 'dessert'))
});

breadLink.addEventListener("click", () => {
    createRecipeCard(recipes.filter(recipe => recipe.keyword === 'bread'))
});

snackLink.addEventListener("click", () => {
    createRecipeCard(recipes.filter(recipe => recipe.keyword === 'snack'))
});

function createRecipeCard(filteredRecipes) {
    const display = document.querySelector(".display");
    display.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const card = document.createElement("section");
        card.classList.add("recipe-card");
      
        const name = document.createElement("h3");
        name.textContent = recipe.name;

        const servings = document.createElement("p");
        servings.textContent = `Servings: ${recipe.servings}`;

        const ingTitle = document.createElement("h4");
        ingTitle.textContent = "Ingredients";

        const ingList = document.createElement("ul");
        recipe.ingredients.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ingList.appendChild(li);
        });

        const dirTitle = document.createElement("h4");
        dirTitle.textContent = "Directions";

        const dirList = document.createElement("ol");
        recipe.directions.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            dirList.appendChild(li);
        });

        card.appendChild(name);
        card.appendChild(servings);
        card.appendChild(ingTitle);
        card.appendChild(ingList);
        card.appendChild(dirTitle);
        card.appendChild(dirList);

        display.appendChild(card);
    });
}

