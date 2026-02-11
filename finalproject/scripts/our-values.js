import { values } from '../data/values.mjs'

/*const values = [
    {
        name: 'GENEROSITY',
        description: 'We build a storehouse not only for our time of need, but also to help others in their time of need, recognizing how abundantly we have been blessed.'
    },
    {
        name: 'PROVIDENT LIVING',
        description: 'We are committed to wise stewardship of resources and thoughtful preparation for both present and future needs.'
    },
    {
        name: 'WISDOM AND ORDER',
        description: 'We can achieve our objectives by being diligent, recognizing that we need not run faster than we have strength or go into debt to reach the goal. Creating home storage is not something we should do out of a sense of panic, but from a desire to prepare wisely.'
    },
    {
        name: 'CUSTOMIZATION',
        description: 'What items you store should not be chosen by someone else. Home storage that is personalized to your preferences, lifestyle, and family needs will be the most useful and sustainable.'
    }
]*/

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