let hashvalue = window.location.hash.substring(1);

json = {'user': 'regular','email':'user@example.com'}

if(hashvalue){
    json = {'user': 'regular','email':hashvalue}
}

let msg = `Hash value: ${hashvalue} || json: ${json}\n`;

var object = JSON.parse(json)

// some "trusted" logic using the object variable

document.getElementById("output").innerText = msg;
