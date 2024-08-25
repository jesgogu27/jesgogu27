let fs = require('fs');

fs.appendFile('miArchivo.json', '{ "User": {"nombre": "pepito pere", "email": "pepito@email.com"}}',
    function(err){
        if(err) throw err;
        console.log('saved!');
    });
