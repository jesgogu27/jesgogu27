console.log( 'Inicio de Programa' );


setTimeout( ()=> {
    console.log( 'Primer TimeOut' )
}, 3000 );


setTimeout( () => {
    console.log( 'Segundo TimeOut' )
}, 1000 );


setTimeout( ()=> {
    console.log( 'Tercer Timeout' )
}, 0 );


console.log('Fin del Programa');