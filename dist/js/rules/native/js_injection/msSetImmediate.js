let hashvalue = window.location.hash.substring(1);

if(hashvalue){
  msg = msSetImmediate(hashvalue);
}

document.getElementById("output").innerText = msg;
