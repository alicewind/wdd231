

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');

});

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const timestamp = document.getElementById("timestamp");
if (timestamp) {
    timestamp.value = today.toLocaleString();
}

const submissionKey = "last-submission";
const submissionDisplay = document.querySelector("#submission")

const lastSubmission = localStorage.getItem(submissionKey);

if (submissionDisplay) {
    if (lastSubmission) {
        submissionDisplay.textContent = `Your last submitted question or comment was on ${lastSubmission}.`;
    } else {
        submissionDisplay.textContent = `You have no previous question or comment submissions.`;
    }    
}

const submissionButton = document.querySelector("#submit-info")
submissionButton.addEventListener('click', () => {
    localStorage.setItem(submissionKey, today.toDateString());
});