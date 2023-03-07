let startEl = document.getElementById('start');

let innerContainerEl = document.getElementById('inner-container');

startEl.addEventListener('click', function(){

    innerContainerEl.style.display = 'flex';
    innerContainerEl.innerHTML=''

    let difficultEl = document.getElementById('difficult').value;
    
    if(difficultEl == 'easy'){

        createAndColorSquare(1,100,innerContainerEl,10,10)

    }else if(difficultEl == 'medium'){

        createAndColorSquare(1,81,innerContainerEl,9,9)

    }else{

        createAndColorSquare(1,49,innerContainerEl,7,7)

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
function createAndColorSquare (numMin,numMax,container,numRow,numCol){

    let array = generateNumbers(numMin,numMax);

    console.log(array);

    let positiveClick = 0

    let resultEl = document.getElementById ('result');

    for(let i = numMin ; i <= numMax ; i++){

        let squareEl = document.createElement('div');

        squareEl.classList.add('square');
        
        squareEl.style.width = `calc(100% / ${numRow})`

        squareEl.style.height = `calc(100% / ${numCol})`

        squareEl.innerHTML = i;

       
        
        squareEl.addEventListener('click', function(){

            let squareArray = document.querySelectorAll('.square')

            if( array.includes(i)){
                
                for(j = 0; j < squareArray.length; j++){
    
                    if(array.includes(parseInt(squareArray[j].innerHTML)))

                    squareArray[j].classList.add('bomb')
                    
                }
               

                resultEl.innerHTML = (`HAI PERSO, il tuo punteggio è: ${positiveClick}`)

                resultEl.style.display = 'inline-block'

                container.classList.add('pointer-event')

                



            }else{

                squareEl.classList.add('active');
                squareEl.classList.add('pointer-event')

                console.log(squareEl.innerHTML);

                positiveClick++

                if(positiveClick == (numMax - 16 )){

                    container.classList.add('pointer-event');

                    resultEl.innerHTML = (`HAI VINTO, il tuo punteggio è: ${positiveClick}`)
                }

                

            }

            
        })


        container.append(squareEl);

    }
    
    
}







function generateNumbers(min, max){

    let numbers = [];
    let i = 0;
    let n;
    
    do{ 
        do{
            n = Math.floor(Math.random() * (max - min + 1) + min)
    
            }while(numbers.includes(n))
    
        numbers.push(n);
    
        i++;
    }while(i < 16);
    
    return numbers
    }