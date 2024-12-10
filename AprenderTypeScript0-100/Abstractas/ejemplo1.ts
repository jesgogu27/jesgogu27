abstract class Animal {
    abstract Ruido(): string;
}


class Gato extends Animal {
    Ruido(){
        const ruidoGato: string = 'Mauya';
        return ruidoGato; 
    }
} 

class Perro extends Animal {
    Ruido(){
        const ruidoPerro: string= 'Guau Nojda';
        return ruidoPerro;
    }
}