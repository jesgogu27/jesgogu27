function crearPersona( nombre, apelido ){
    return { nombre, apelido } 
}


const crearPersona2 = (nombre, apelido) =>  ({ nombre, apelido });


const persona = crearPersona( 'Isaac', 'david');
console.log(persona);

const persona2 = crearPersona2( 'Martha', 'Tersera' );

console.log(persona2);

