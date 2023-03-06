let startEl = document.getElementById('start');

let innerContainerEl = document.getElementById('inner-container');

startEl.addEventListener('click', function(){
    innerContainerEl.style.display = 'flex';
    let difficultEl = document.getElementById('difficult').value;
    
    if(difficultEl == 'easy'){

        createAndColorToggleSquare(1,100,innerContainerEl,10,10)

    }else if(difficultEl == 'medium'){

        createAndColorToggleSquare(1,81,innerContainerEl,9,9)

    }else{

        createAndColorToggleSquare(1,49,innerContainerEl,7,7)

    }
})


// ---------------------------FUNCTION------------------------------------

/**
 * Dati il numero minimo di quadrati, il numero massimo di quadrati, il container che deve contenerli tutti 
 * il numero di righe e il numero di colonne la funzione restituisce un quadrato con tanti quadrati all'interno
 * quanti ne sono richiesti e li dispone secondo il numero di righe e colonne indicato.
 * permette inoltre di togglare il colore al click del quadrato
 * @param {any} numMin
 * @param {any} numMax
 * @param {any} container
 * @param {any} numRow
 * @param {any} numCol
 * @returns {any}
 */
function createAndColorToggleSquare (numMin,numMax,container,numRow,numCol){

    for(let i = numMin ; i <= numMax ; i++){

        let squareEl = document.createElement('div');

        squareEl.classList.add('square');
        squareEl.style.width = `calc(100% / ${numRow})`

        squareEl.style.height = `calc(100% / ${numCol})`

        squareEl.innerHTML = i;
        
        squareEl.addEventListener('click', function(){

            squareEl.classList.toggle('active')
            console.log(squareEl.innerHTML)
        })

        container.append(squareEl);

    }
    
    
}