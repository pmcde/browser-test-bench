let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}  <br><script id="script" src="non-existent.js">`;

document.getElementById("output").innerHTML = msg;

if(hashvalue){
    document.getElementById("script").src = hashvalue;
}
