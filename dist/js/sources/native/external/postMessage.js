window.addEventListener("message", (event) => {
  document.getElementById("output").innerHTML = event.data;
}, false);
