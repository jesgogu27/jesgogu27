let fs = require('fs');
fs.appendFile('miArchivo.json', '{ "nombre": "pepito"}', function(err) {
    if (err) throw err;
        console.error('Update!!');
});