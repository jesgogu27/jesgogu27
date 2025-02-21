"use strict";
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
let arrayInicial = [];
for (let i = 0; i < impuestos.length; i++) {
    arrayInicial = impuestos[i];
    console.log(impuestos[i]);
    if (Array.isArray(arrayInicial.otroImpuesto)) {
        for (let j = 0; j < arrayInicial[j]; j++) {
            console.log(arrayInicial.otroImpuesto[i][j]);
        }
    }
}
let msg = "jesus maria";
console.log(msg);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(b * c);
let diferentesTipos;
function convertir(valor) {
    let diferentesTipos = valor;
    if (diferentesTipos == 'undefined') {
        console.log(diferentesTipos);
    }
    else {
        console.log(diferentesTipos);
    }
}
convertir('undefined');
convertir(5);
;
let bands = [];
bands.push('Van Halen');
//myobject = bands;
//console.log(myobject);
//myobject = {};
let myobject2 = { 'name': 'mouse', 'description': 'inalambrico' };
//console.log(typeof myobject);
if (myobject2.carga != undefined) {
    console.log(`${myobject2.name} , ${myobject2.description}`);
}
else {
    console.log(`carga not found`);
}
let jcr = {
    name: 'Juancho',
    active: true,
    albums: [1990, 1991, 1992, 1993, 'Condor herido']
};
console.log(jcr.albums);
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(5, 10));
let multiply = function (c, d) { if (d < 5) {
    return c * d;
}
else {
    return c * 6;
} };
class Coder {
    constructor(name, music, age, lang = 'TypeScriptenglish') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
console.log(Dave.music);
console.log(Dave.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I Write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
