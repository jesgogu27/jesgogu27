let arregloDeCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    { a:1 },
    ['X', 'Megaman', 'Zero', 'Dr.Light']
]

let arreglo = ['amarillo', 'azul', 'rojo', 'blanco'];
console.log(arregloDeCosas [7][3]);


arreglo.forEach( (elemento, indexa, arra) => {
    console.log( { elemento, indexa, arra });
});

let split = arreglo.splice(2,2);
console.log(split);