const appId = "c7715d44";
const appKey = "1f266ba8e94caf44f802c174f2e9bd45";

const searchBtn = document.querySelector("#searchButton");
const results = document.querySelector("#results");

searchBtn.addEventListener("click", searchRecipes);

async function searchRecipes() {
    const query = document.querySelector("#searchInput").value;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(url, {
            headers: {
                "Edamam-Account-User": "alicewind"
            }
        });

        if (response.ok) {
            const data = await response.json();
            displayRecipes(data.hits);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayRecipes(data) {
    results.innerHTML = "";

    data.forEach(item => {
        const recipe = item.recipe;
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
        <h3>${recipe.label}</h3>
        <img src="${recipe.image}" width="200">
        <p>Calories: ${Math.round(recipe.calories)}</p>
        <a href="${recipe.url}" target="_blank">View Recipe</a>
        `;

        results.appendChild(card);
    });
}

const clearBtn = document.querySelector("#clearButton");

clearBtn.addEventListener("click", () => {
    document.querySelector("#searchInput").value = "";
    results.innerHTML = "";
});