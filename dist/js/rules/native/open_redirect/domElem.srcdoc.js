let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}`;

if(hashvalue){
  var iframe = document.createElement("iframe");
  iframe.srcdoc = hashvalue;
  document.body.appendChild(iframe);
}

document.getElementById("output").innerText = msg;
