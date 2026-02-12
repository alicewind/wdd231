const jsonFilepath = 'data/values.json';
const cards = document.querySelector(".values");

async function getValuesData(jsonFilepath) {
    const response = await fetch(
        jsonFilepath);
    const data = await response.json();
    displayValues(data.values);
}

getValuesData(jsonFilepath);

const displayValues = (values) => {
    values.forEach((value) => {

        let card = document.createElement("div");        
        let name = document.createElement("h3");

        name.textContent = value.name;

        card.appendChild(name);        

        card.addEventListener("click", () => {
            displayValueDetails(value);
        });

        cards.appendChild(card);
    });
}

const valueDetails = document.querySelector("#value-details");

function displayValueDetails(value) {
    valueDetails.innerHTML = '';
    valueDetails.innerHTML = `
    <button id= "closeModal">❌</button>
    <h2>${value.name}</h2>
    <p><strong>Definition:</strong> ${value.description}</p>
    `;
    valueDetails.showModal();

    const closeModal = valueDetails.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        valueDetails.close();
    });
}