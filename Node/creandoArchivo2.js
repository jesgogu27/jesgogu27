let fs = require('fs');

fs.open('miArchivo2.txt', 'w', function (err, file){
    if ( err) throw err;
    console.log('saved');
});