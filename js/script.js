// creo le bombe --> arrey di 16 numeri casuali
    // - non ci possono essere doppioni  if( !numbersArray.includes() ) {}

// se l'utente clicca sulla bomba la cella diventa rossa (aggiunge la classe '.lose') 

// raggiunge il numero massimo possibile di numeri consentiti.

    // - e la partita termina 
    //     -- non può più cliccare su nessuna cella 
    //     --- compare la scritta sotto communicando all'utente:
    //         ---- che ha perso 
    //         ---- il numero di volte che l'utente a cliccato su una cella che non era una bomba
// 
            
////////////////////////////////////////////////////////////////////////////////////////

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

    // BOMBE
    // creo l'arrey di 16 numeri casuali
    const randomNumber = 16;

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

// creo la funzione che mi permette di creare le celle in base alla difficoltà
function createSquare (singleNumber, customClass){

    const newBox = document.createElement('div');

    newBox.classList.add('square');
    newBox.classList.add(customClass);
    newBox.innerHTML = `<span>${singleNumber}</span>`;

    return newBox;
}







