const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");

const myKey = "06a29db331dace161608e9db83a9b2f3";
const myLat = "49.75";
const myLong = "6.64";

const captionDesc = document.querySelector("figcaption");
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
}

apiFetch();