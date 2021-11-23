let hashvalue = window.location.hash.substring(1);

if(hashvalue){
  var range = document.createRange();

  // Make the parent of the first div in the document become the context node
  range.selectNode(document.getElementsByTagName("div").item(0));
  var documentFragment = range.createContextualFragment(hashvalue);
  document.body.appendChild(documentFragment);
}

document.getElementById("output").innerText = msg;
