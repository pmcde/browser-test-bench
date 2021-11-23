let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}`;

if(hashvalue){
  function reqListener () {
    console.log(this.responseText);
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", hashvalue);
  oReq.send();
}

document.getElementById("output").innerText = msg;
