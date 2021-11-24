

// seleziono il pulsante play
const playButton = document.getElementById('play');
playButton.addEventListener('click', startGame);

// funzione click play-button
function startGame(){

    // rimuovo il text-main al click di play-button
    const textMain = document.getElementById('text-main');
    textMain.classList.add('hidden');

    // aggiungo la griglia al click di play-button
    const maingrid = document.getElementById('grid');
    maingrid.classList.remove('hidden');
    maingrid.innerHTML = '';

    

    // memorizzo i dati nella select 
    const selectValue = document.getElementById('select-level').value;

    // creo la variabile che mi dice quanti 'square' ci devono essre in base alla difficoltà
    let totalSquareNumber = 49;
    let customClass = 'd-difficult';

    // creo la tabella in base al valore della select
    if( selectValue === 'd-2' ) {
        customClass = 'd-medium';
        totalSquareNumber = 81;
    } 
    else if( selectValue === 'd-1' ) {
        customClass = 'd-easy';
        totalSquareNumber = 100;
    }
    //////////////////////////////////////////////

    ////////////////////////////////////////
    // creo le celle in base alla difficoltà sceltà dall'utente
    for( let i = 1; i <= totalSquareNumber; i++){
        totalSquare = createSquare(i, customClass);
        totalSquare.addEventListener('click', squareClick);
        maingrid.appendChild(totalSquare) ;
    }

}
function squareClick (){
    // quando clicco su quel tasto deve aggiungersi la classe click (che imposta il backgrouns blue)
    this.classList.add('click');
}
////////////////////////////////////////////////////////////////////////////////


const boombsArrey = [];

////////////////////////////////////////////////////////////////////////////////
// creo la funzione che mi permette di creare le celle in base alla difficoltà
function createSquare (singleNumber, customClass){

    const newBox = document.createElement('div');

    newBox.classList.add('square');
    newBox.classList.add(customClass);
    newBox.innerHTML = `<span>${singleNumber}</span>`;

    return newBox;
}
//////////////////////////////////////////////////////////////////////////////

// FUNZIONE 
// creo le bombe --> arrey di 16 numeri casuali
    // - non ci possono essere doppioni  if( !numbersArray.includes() ) {}
// END FUNZIONE

// se l'utente clicca sulla bomba la cella diventa rossa (aggiunge la classe '.lose') 

// raggiunge il numero massimo possibile di numeri consentiti.

    // - e la partita termina 
    //     -- non può più cliccare su nessuna cella 
    //     --- compare la scritta sotto communicando all'utente:
    //         ---- che ha perso 
    //         ---- il numero di volte che l'utente a cliccato su una cella che non era una bomba
// 
            


// BOMBE

// maxRangeNumber --> range di numeri in cui vengono generate le bombe
// numberOfBoom --> il numero di bombe che devono essere create

// creo una funzione 

function boombsGenerate(maxRangeNumber, numberOfBoom){

    // fino a che l'arrey non ha il nuomero di elementi di numberOfBoom 
    // continua a generare numeri random 

    const arreyBoomPosition = [];

    while( arreyBoomPosition.lenght < numberOfBoom ) {
        const randomNumber = getRndInteger(1, maxRangeNumber);

        if(!arreyBoomPosition.includes(randomNumber)) {
            arreyBoomPosition.push(randomNumber);
        }

    }
    return arreyBoomPosition;

}
let prova = boombsGenerate(100, 16);
console.log(prova);

// w3 shool random number function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}








