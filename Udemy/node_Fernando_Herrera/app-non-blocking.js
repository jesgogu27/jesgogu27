const {getUsuario} = require('./Usuario/usuario')

console.log('Inicio de programa');
console.time('Inicio');

getUsuario(1, (usuario) => {
    console.log('Usuario 1: ', usuario);
});

getUsuario(2, (usuario) => {
    console.log('Usuario 2: ', usuario);
    console.timeEnd('Inicio');
});


console.log('fin de programa');