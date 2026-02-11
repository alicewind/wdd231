const formInfo = new URLSearchParams(window.location.search);

document.querySelector("#info").innerHTML = `
<p><strong>Name: </strong>${formInfo.get("fname")}</p>
<p><strong>Email: </strong>${formInfo.get("email")}</p>
<p><strong>Phone: </strong>${formInfo.get("phone")}</p>
<p><strong>Question or Comment: </strong>${formInfo.get("comment")}</p>
<p><strong>Submitted On: </strong>${formInfo.get("timestamp")}</p>`;