const random = parseInt(Math.random()*100+1)
const submit = document.querySelector('#guesssubmit')
const userin = document.querySelector('#guessfield')
const guesses = document.querySelector('.guesses')
const lastresult = document.querySelector('.last-result')
const lowOrHi = document.querySelector('.lowOrHi')
const result = document.querySelector('.result')
const p=document.createElement('p')
let prevguess =[]
let numguess =1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess = parseInt(userin.value)
       validateguess(guess);
    })
}

function validateguess(guess){
    if(isNaN(guess)||guess<1 || guess>100){
        alert("Please Enter a Valid Number")
        userin.value=""
    }
    else{
        prevguess.push(guess)
        if(prevguess>=10){
            displayguess(guess)
            displaymessage(`Game Over. Random Number Was ${random}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
     
}

function checkguess(guess){
    if(guess===random){
        displaymessage(`you guess it right`)
        endgame()
    }
    else if(guess<random){
        displaymessage(`Number is TOO Low`)
    }
    else if(guess>random){
        displaymessage(`Number is TOO High`)
    }
}

function displaymessage(message){
    lowOrHi.textContent=`<h2>${message}</h2>`

}

function displayguess(guess){
    userin.value=''
    guesses.textContent+=`${guess+","}`
    numguess++;
    lastresult.textContent=`${11-numguess}`
    if(guesses.textContent.length===10){
        guesses.textContent.length.toFixed()
    }


}
function endgame(){

}
function newgame(){

}






















