let msg = "Hash Value: " + window.location.hash.substring(1);
document.domain = window.location.hash.substring(1);

document.getElementById("output").innerText = msg;
