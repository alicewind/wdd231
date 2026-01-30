const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const timestamp = document.getElementById("timestamp");
if (timestamp) {
    timestamp.value = today.toLocaleString();
}
