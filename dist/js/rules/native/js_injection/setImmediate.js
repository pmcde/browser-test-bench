let hashvalue = window.location.hash.substring(1);

if(hashvalue){
  msg = setImmediate(hashvalue);
}

document.getElementById("output").innerText = msg;
