let hashvalue = window.location.hash.substring(1);
sessionStorage.setItem('key','hardcoded value');
let msg = `Hash value: ${hashvalue}` + sessionStorage.getItem('safe');
if(hashvalue){
  sessionStorage.setItem('key', hashvalue);
}

document.getElementById("output").innerText = msg;
