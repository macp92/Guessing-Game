const guessButton = document.getElementById('guessButton');
const replay = document.getElementById('playAgain');
const input = document.getElementById('inputBox');
const hintButton = document.getElementById('hintButton');
const announcement = document.getElementById('announcement')
// const listVal = document.getElementById(counter).innerHTML

let counter = 5;
let num = Math.ceil(Math.random() * 100);


//FUNCTION FOR AUTOMATIC HINT, HIGHER OR LOWER
function wrongGuess(val){
    if (val > num){
        document.getElementById('hint').innerHTML += ' Too high!'
    }
    else if (val < num){
        document.getElementById('hint').innerHTML += ' Too low!'
    }
}

function myHint(inputVal){
    if (inputVal > num){
        if (inputVal - num > 25){
            document.getElementById('hint').innerHTML = 'Too high! Ice cold!'
        } else if (inputVal - num <= 5){
            document.getElementById('hint').innerHTML = 'Too high. Burning hot!'
        } else {document.getElementById('hint').innerHTML = 'Too high! Lukewarm'}
    } else if (inputVal < num){
        if (num - inputVal > 25){
            document.getElementById('hint').innerHTML = 'Too low! Ice cold!'
        } else if (num - inputVal <= 5){
            document.getElementById('hint').innerHTML = 'Too low! Burning hot!'
        } else {document.getElementById('hint').innerHTML = 'Too low! Lukewarm!'}
    }
}

//FUNCTION FOR SUBMITTING GUESSES
function numGuess (){
    document.getElementById('hint').innerHTML = ''
    let inputNum = parseInt(input.value, 10)                    //turns the guess from a string to a num
    document.getElementById(counter).innerHTML = inputNum       //sets the previous guess to the list at the value of the counter
    wrongGuess(inputNum)                                        //tells higher or lower
    counter--
    if (counter >= 1){
        if (inputNum === num){
            announcement.innerHTML = 'Congratulations! You got the number!'
        }
        else if (counter === 1){
            announcement.innerHTML = 'Last guess, choose wisely!'
        }
        else {
            announcement.innerHTML = `${counter} guesses remaining!`}
    }
    else if (inputNum === num){
        announcement.innerHTML = 'Congratulations! You got the number!'
    } else {announcement.innerHTML = `Sorry, the number was ${num}! Play again?`}
}

//EVENT LISTENER FOR CLICKING 'SUBMIT GUESS' BUTTON
guessButton.addEventListener('click', function(){
    if (counter > 0) {numGuess()}
    else {announcement.innerHTML = 'You\'re out of guesses! Try again?'}
})

// TRYING TO WORK OUT HOW TO SUBMIT WITH ENTER KEY
// input.addEventListener('submit', function(){
//     numGuess()
// })

replay.addEventListener('click', function(){
    counter = 5;
    num = Math.ceil(Math.random() * 100);
    input.value = '';
    document.getElementById(5).innerHTML = ''
    document.getElementById(4).innerHTML = ''
    document.getElementById(3).innerHTML = ''
    document.getElementById(2).innerHTML = ''
    document.getElementById(1).innerHTML = ''
    document.getElementById('hint').innerHTML = 'New game! Good Luck!'
    announcement.innerHTML = `${counter} guesses remaining!`;
})

hintButton.addEventListener('click', function(){
    //let inputNum = parseInt(input.value, 10)
    let inputNum = document.getElementById(counter + 1).innerHTML
    myHint(inputNum)
})
