let randomNumber = parseInt(Math.random() * 100 + 1);


const submitButton = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const previousGuesses = document.querySelector(".guesses")
const guessRemaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")


let prevGuess = []
let numbersOfGuesses = 1

let playGame = true

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Input is not a number, Please enter a number.')
    }
    else if (guess < 1) {
        alert('Please enter a number between 1 to 100.')
    }
    else if (guess > 100) {
        alert('Please enter a number between 1 to 100.')
    }
    else {
        prevGuess.push(guess)
        if (numbersOfGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over !!! Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayGuess(guess)
        displayMessage(`You guessed it right !!!`)
        endGame()
    }
    else if (guess < randomNumber) {
        alert('Number is too low.')
    }
    else if (guess > randomNumber) {
        alert('Number is too high.')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    previousGuesses.innerHTML += `${guess},  `
    numbersOfGuesses++;
    guessRemaining.innerHTML = `${11 - numbersOfGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game!!</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess =[]
        numbersOfGuesses = 1
        previousGuesses.innerHTML = ''
        guessRemaining.innerHTML = `${11 - numbersOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        e.playGame = true

    })
}
