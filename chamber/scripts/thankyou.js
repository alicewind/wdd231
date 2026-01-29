const formInfo = new URLSearchParams(window.location.search);

document.querySelector("#info").innerHTML = `
<p>Name: ${formInfo.get("first")} ${formInfo.get("last")}</p>
<p>Email: ${formInfo.get("email")}</p>
<p>Phone: ${formInfo.get("phone")}</p>
<p>Business/Organization: ${formInfo.get("organization-name")}</p>
<p>Membership Level: ${formInfo.get("radio")}</p>
<p>Submitted On: ${formInfo.get("timestamp")}</p>`;


