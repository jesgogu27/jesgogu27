const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log(deadpool.getNombre() );


const {nombre, apellido, poder} = deadpool;
console.log (nombre, apellido, poder);


const heroes =  ['Deadpool', 'Superman', 'Batman'];

console.log (heroes[1], heroes[2]);



