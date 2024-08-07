

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


//Referencias al HTML

const btnPedir  = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');


let puntosJugador = 0,
    puntosComputadora = 0;

const crearDeck = () => {

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
        
    }

    for( let tipo of tipos){
        for(let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
}

crearDeck();


// Tomar carta

const pedirCarta = () => {


    if(deck.length === 0) {
        throw 'No hay cartas';
    }
    const carta = deck.pop();
    
    console.log(deck);
    console.log(carta);
    return carta;
}

//pedirCarta();


const valorCarta = ( carta ) => {  

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
    ( valor === 'A' ) ? 11 : 10
    : valor * 1;
}

const valor = valorCarta( pedirCarta() );
console.log({ valor });

//turno de la computadora


const turnoComputadora = ( puntosMinimo ) => {

    do {

    } while ( );



}




//eventos


btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta();

    puntosJugador =  puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ){
        console.warn( 'Lo siento, Perdiste');
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ){
        console.warn( '21, Genial!!!');
        btnPedir.disabled = true;
    }

});