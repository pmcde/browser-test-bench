let hashvalue = window.location.hash.substring(1);

if(hashvalue){
  msg = execScript(hashvalue,"JavaScript");
}

document.getElementById("output").innerText = msg;
