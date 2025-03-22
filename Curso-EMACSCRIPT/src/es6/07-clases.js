//declarando
class User{

}


//instancia de una clase
//const newUser = new User();

class user{

    //metodos
    greeting() {
    return 'Hello'       
    }
};


const modales = new user();
console.log(modales.greeting());

const modalesSaludar =  new user();
console.log(modalesSaludar.greeting());


//constructor
class user{
    constructor(){
        console.log("nuevo user");
    }

    greeting() {
        return 'Hello'       
    }
}

const modales3 = new user();

//this
class user{
    constructor(name){
        this.name = name;
    }
    
    //metodos
    speak(){
        return'hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metodos
    speak(){
        return 'hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        return this.age = n;
    }

}

const bebeloper1= new user('David', 15);

console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);