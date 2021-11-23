let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}`;
if(hashvalue){
    const tag = document.createElement("script");
    tag.textContent = hashvalue;
    document.body.appendChild(tag); //executes code
}

document.getElementById("output").innerText = msg;
