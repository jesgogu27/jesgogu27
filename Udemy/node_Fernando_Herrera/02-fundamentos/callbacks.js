//setTimeout(); //ejecuta un callback en cierto momento del tiempo.

// console.log('inicio');
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 5000);

// console.log("finalizado");  

const getUserById = (id, callback) =>{

    const usuarios = {
        id, 
        nombre: 'Jesus'
    }

    setTimeout(() =>{
        callback(usuarios);
    }, 2000)
}


getUserById(10, (usuario) => {
    console.log('entesdiste lo que es un CallBack');
    console.log(usuario);
    console.log(usuario.id);
    console.log(usuario.nombre);
});
// 
// getUserById(10, (user) => {
    
//     console.log(user.id);
//     console.log(user.nombre);
// }));
