const empleados = [
    {
        id: 1,
        nombre: 'Jesus'
    },

    {
        id: 2,
        nombre: 'Dilia'
    },
    
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 1500
    },
    
];

const getEmpleado = (id, callback) => {

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        if (empleado) {
            resolve(empleado);
        }else {
            reject(`No Existe empleado con ID ${id}`);
        }
    });
    
    return promesa;
    // if (empleado) {
    //     return empleado;
    // }else { return `${id} NO EXISTE`;}
    
};

//console.log(getEmpleado(5))

// getEmpleado(1, (err, empleado) => {
    
//     if( err ) {
//         console.log(err);
//         return console.error(err);
//     }

//     console.log ('Empleado Encontrado');
//     console.log (empleado);
// });

getEmpleado(id)
    .then((empleado) => console.log(empleado));