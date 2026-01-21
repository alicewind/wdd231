const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");


const myKey = "06a29db331dace161608e9db83a9b2f3";
const myLat = "40.38";
const myLong = "-111.74";

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

function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}

function displayResults(data) {    
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    
    captionDesc.textContent = `${data.weather[0].main}`;
    
    highTemp.innerHTML = `${Math.round(data.main.temp_max)}&deg;`;
    lowTemp.innerHTML = `${Math.round(data.main.temp_min)}&deg;`;
    humidity.textContent = `${data.main.humidity}%`;
    
    sunrise.textContent = formatTime(data.sys.sunrise);
    sunset.textContent = formatTime(data.sys.sunset);
}

apiFetch();