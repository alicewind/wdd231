import { places } from '../data/places.mjs'

const cardsContainer = document.querySelector("#places-cards")

places.forEach(place => {
    const card = document.createElement('section');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = place.name;

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = `${place.image}`;
    img.alt = place.name;
    img.loading = 'lazy';
    figure.appendChild(img);

    const description = document.createElement('p');
    description.textContent = place.description;

    const address = document.createElement('address');
    address.textContent = place.address;

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(description);
    card.appendChild(address);

    cardsContainer.appendChild(card);

});