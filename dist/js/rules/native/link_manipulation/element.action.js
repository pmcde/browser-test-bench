let hashvalue = window.location.hash.substring(1);
let msg = `Hash value: ${hashvalue}  <br><form id="form" action="non-existent.php"> Name: <input type="text" name="name"><br> <input type="submit" vlue="submit"> </form>`;

document.getElementById("output").innerHTML = msg;

if(hashvalue){
    document.getElementById("form").action = hashvalue;
}
