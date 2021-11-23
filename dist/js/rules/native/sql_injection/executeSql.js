let hashvalue = decodeURIComponent(window.location.hash.substring(1));
let msg = `Hash value: ${hashvalue}`;

try {
    if (!window.openDatabase) {
        alert('not supported');
    } else {
        var shortName = 'mydatabase';
        var version = '1.0';
        var displayName = 'My Important Database';
        var maxSize = 65536;
        var db = openDatabase(shortName, version, displayName, maxSize);
 
        // You should have a database instance in db.
    }
} catch(e) {
    if (e == 2) {
        alert("Invalid database version.");
    } else {
        alert("Unknown error "+e+".");
    }
    //return;
}

 db.transaction(
        function (transaction) {
 
            /* The first query causes the transaction to (intentionally) fail if the table exists. */
            transaction.executeSql('CREATE TABLE people(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL DEFAULT "John Doe", shirt TEXT NOT NULL DEFAULT "Purple");', []);//, nullDataHandler, errorHandler);
            /* These insertions will be skipped if the table already exists. */
            transaction.executeSql('insert into people (name, shirt) VALUES ("Joe", "Green");', []);
            transaction.executeSql('insert into people (name, shirt) VALUES ("Mark", "Blue");', []);
            transaction.executeSql('insert into people (name, shirt) VALUES ("Phil", "Orange");', []);
            transaction.executeSql('insert into people (name, shirt) VALUES ("jdoe", "Purple");', []);
        }
    );


if(hashvalue){
  db.transaction(function (tx) { 
  // SQLi - X"OR%20"1
    tx.executeSql('SELECT * FROM people WHERE shirt ="' + hashvalue + '"', [], function (tx, results) { 
        var len = results.rows.length, i; 
        msg = "<p>Found rows: " + len + "</p>"; 
        document.querySelector('#output').innerHTML +=  msg; 

        for (i = 0; i < len; i++) { 
            msg = "<p><b>" + results.rows.item(i).name + "</b></p>"; 
            document.querySelector('#output').innerHTML +=  msg; 
        } 
    }, null); 
    }); 
    
}

document.getElementById("output").innerText += msg;
