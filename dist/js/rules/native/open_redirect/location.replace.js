let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}`;

if(hashvalue){
  location.replace(hashvalue);
}

document.getElementById("output").innerText = msg;
