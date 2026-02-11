import { values } from '../data/values.mjs'

createValueCard(values);

function createValueCard(values) {
    const displayValue = document.querySelector(".values");

    values.forEach(value => {
        let card = document.createElement("div");
        let name = document.createElement("h3");

        name.textContent = `${value.name}`;

        card.addEventListener('click', () => {
            displayValueDetails(value);
        });

        card.appendChild(name)
        displayValue.appendChild(card);
    })

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