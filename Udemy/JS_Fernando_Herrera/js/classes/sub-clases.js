class Persona{

    static _conteo = 0;
    static get conteo (){
        return Persona._conteo+ ' Instancias';
    }

    static mensaje (){
        console.log( this.nombre );
        console.log( 'hola a todos, soy un método estático' );
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita ( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita de  ${ this.nombre } es ${ this.comida}`;

    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${this.codigo} `);
    }

    miFrase() {
        this.quienSoy();
        console.log(`Soy ${ this.codigo } dice: ${ this.frase } es ${ this.frase }`);
    }
}

//const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Iroman');

class Heroe extends Persona {

    clan = 'sin clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }
}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy el Hombre Araña');


console.log(spiderman);