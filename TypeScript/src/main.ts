let impuestos = [
  {
    impuesto: "false",
    Precio: 1000,
    moneda: "cop",
    otroImpuesto: [
      { impuesto1: "01", impuesto2: 500, moneda2: "cop" },
      { impuesto1: "01", impuesto2: 500, moneda2: "cop" },
    ],
  },
  {},
];

let arrayInicial: any = [];
for (let i = 0; i < impuestos.length; i++) {
  arrayInicial = impuestos[i];
  console.log(impuestos[i]);
  if (Array.isArray(arrayInicial.otroImpuesto)) {
    for (let j = 0; j < arrayInicial[j]; j++) {
      console.log(arrayInicial.otroImpuesto[i][j]);
    }
  }
}

let msg: string = "jesus maria";
console.log(msg);

let a: number = 12;
let b: number = 6;
let c: number = 2;

console.log(a / b);

console.log(b * c);

let diferentesTipos: string | number;

function convertir(valor: number | String) {
 let diferentesTipos  = valor;
  if (diferentesTipos == 'undefined') {
    console.log(diferentesTipos);
  } else {
    console.log(diferentesTipos);
  }
}

convertir('undefined');
convertir(5);


interface myobject {
    name :  string;
    description: string;
    carga?: string;
};


let bands: string[] = [];
bands.push('Van Halen');

//myobject = bands;
//console.log(myobject);
//myobject = {};


let myobject2 : myobject= {'name' : 'mouse', 'description' : 'inalambrico'};
//console.log(typeof myobject);

    if( myobject2.carga != undefined){
        console.log(`${myobject2.name} , ${myobject2.description}`);
    } else {
     console.log(`carga not found`);
    }


type Acordeon = {
    name: string,
    active: boolean,
    albums: ( string | number ) []
}

let jcr: Acordeon = {
    name :'Juancho',
    active : true,
    albums : [1990, 1991, 1992, 1993, 'Condor herido']
}


console.log(jcr.albums)
let subtract = function (c: number, d:number):number {
    return c - d;
}

console.log(subtract(5, 10));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c,d) { if( d <5 )  {return  c * d } else {return c *6}  }


class Coder {
  /*name : string
  music: string
  age:  number
  lang : string*/
  seconLang!: string
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TypeScriptenglish'
  ) 
    {
      this.name = name;
      this.music =  music;
      this.age = age;
      this.lang = lang;
    }

    public getAge(){
      return `Hello, I'm ${this.age}`
    }

    
  
}

const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
console.log(Dave.music); 
console.log(Dave.name);


class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ){
    super(name, music, age);
    this.computer = computer;
  }

  public getLang(){
    return `I Write ${this.lang}`;
  }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang());
