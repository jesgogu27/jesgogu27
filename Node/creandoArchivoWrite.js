let fs = require('fs');

let texto = 'Hola estoy mostrandome que puedo colocar aqui lo que queramos';
fs.writeFile('Archivo3.txt', texto, function(err) {
    if(err) throw err;
    console.log('Guardado');

});