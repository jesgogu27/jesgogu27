const anotherfuntion = () =>{
    return new Promise((resolve, reject) =>{
        if (false){
            resolve('Hey!!!');
        }else{
            reject('whoops');
        }
    })
}

anotherfuntion()
    .then(response => console.log(response))
    .catch(err=>console.log(err));