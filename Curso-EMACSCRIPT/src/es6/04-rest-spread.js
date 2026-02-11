//arrays destructuring

let fruits = ["apple", "banana", "kiwi"];

let [, b] = fruits;

console.log(b);

let user = { username: "Oscar", age: 34 };
let { username, age } = user;
console.log(username);
console.log(age);

//Spread operator

let person = { name: "Oscar", age: 28 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);

function solution(json1, json2) {
    //toma el json del argumeto y si viene vacio, pasa el declarado por defecto
    let jsonA = json1 || {
        name: "Mr. Michi",
        food: "Pescado",
    };

    let jsonB = json2 || {
        age: 12,
        color: "Blanco",
    };

    let data2 = { ...jsonA, ...jsonB };
    return data2;
}

console.log(solution());
//rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}

sum(1, 1, 2, 3);
