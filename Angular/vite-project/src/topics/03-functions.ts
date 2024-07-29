
//toda funcion retorna undefined

function addNumber(a: number, b : number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): number => {
    return a + b;
}

const result = addNumber(1, 2);

//console.log({result});
const resultArrow = addNumberArrow(1, 2); 
console.log( {resultArrow: resultArrow});


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = ( character: Character, amount: number) =>{
    if(character.hp < 100) {
        character.hp += amount
    } else {
        console.log('en el else', character.hp)
        console.log(`Tiene la vida al 100%`)
    }
}

const strider = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}
    healCharacter( strider, 10);
    healCharacter( strider, 40);
    healCharacter( strider, 50);
    healCharacter( strider, 50);



  strider.showHp();

export {}