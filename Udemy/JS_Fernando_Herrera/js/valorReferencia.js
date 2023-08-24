let  juan = { nombre: "juan" };
let ana = { ...juan };
ana.nombre = 'ana'

console.log({ juan, ana });

const cambiaNombre = ( ...persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' }
let tony = cambiaNombre( peter );

console.log({ peter, tony });

const frutas = [ 'Manzana', 'Pera', 'Piña' ];

const otrasFrutas = [...frutas];

otrasFrutas.push( 'Mango' );

console.table({ frutas, otrasFrutas });