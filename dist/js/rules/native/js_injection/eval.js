let hashvalue = window.location.hash.substring(1);

if(hashvalue){
  msg = eval(hashvalue);
}

document.getElementById("output").innerText = msg;
