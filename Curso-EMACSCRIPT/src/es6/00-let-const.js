var lastName = 'David';
lastName = 'Oscar';

console.log(lastName);

let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';//functions scope
        let fruit2 = 'Orange';//blocks scope
        const fruit3 = 'Banana';//blocks scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();