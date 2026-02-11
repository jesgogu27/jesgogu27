const anotherfuntion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey!!!"); //un resolve si es verdadero. La logica si funciona
        } else {
            reject("whoops"); //un reject, si es falso. La logica si no funciona
        }
    });
};

anotherfuntion()
    .then((response) => console.log(response)) //metodo de la función anonima retorna la promesa. El valor de dicha promesa es el entregado por la función al momento de ejecutarse, el cual puede ser un resolve o un recject.
    .catch((err) => console.log(err)); //El catch, captura algun error que suceda dentro del proceso.
