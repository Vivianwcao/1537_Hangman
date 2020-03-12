//initialize variables
let score = 0;
let lives = 7;


//generate 10 words and their descriptions(hint) in a dictionary.
let blanks = document.getElementById("blanks");
let wordBank = ["committee", "weather", "canopy", "acronym", "electrograph", "hypothetical", "growing", "study", "yolk", "yellow"]
let guessedWord = ""
blanks.innerText = ""
let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
function generateBlanks () {
    
    for (i = 0; i < chosenWord.length; i++) {
        guessedWord = guessedWord + "_"
    }
    return guessedWord
}

guessedWord = generateBlanks()



//generate 26 letters using object constructors.
let lettersContainer = document.getElementById('letters');

let list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
list.sort();
function buttonGenerator(n) {
    let i;
    for (i = 0; i < n; i++) {
        let bttn = document.createElement("button");
        bttn.id = list[i]
        lettersContainer.appendChild(bttn);
        bttn.innerHTML = list[i];
        bttn.onclick = function click() {
            console.log('button ' + bttn.innerHTML + ' is clicked');
            onLetterClick(bttn.innerHTML);
        }
    }
}
buttonGenerator(26);
            



//Blank lines:'_ _ _ _ _'

console.log(guessedWord)

function displayWord(word) {
    blanks.innerText = ""
    for (i = 0; i < word.length; i++) {
    blanks.innerText = blanks.textContent + " " + word[i]
    }
}

displayWord(guessedWord)


//randomly select a word as user refreshes the page.




//**check whether each guess is correct/matches the word shown:
function checkLetterInWord(letter) {
    for (i = 0; i < chosenWord.length; i++) {
        if (chosenWord.includes(letter)) {
            return true
        } else {
            return false
        }

    }
}

function replaceBlanksWithLetter(letter) {
    guessedWord = guessedWord.split("")
    for (i = 0; i < guessedWord.length; i++) {
        if (chosenWord[i] == letter) {
            guessedWord[i] = letter
        }
        
    }
    guessedWord = guessedWord.join("")
}

function onLetterClick (letter) {
    if (checkLetterInWord(letter)) {
        replaceBlanksWithLetter(letter)
        displayWord(guessedWord)
        score = score + 1
        document.getElementById("score").innerHTML = "Score: " +  score.toString()
    } else {
        lives = lives - 1
        document.getElementById("lives").innerHTML = "Lives remain: " +  lives.toString()
    }
}
//while life > 0:
//      if correct -> 1. letter/s will be shown on coresponding blank lines
//                    2. updates on "Score" (current + # of correct letters).
//      if incorrect ->
//                    1. updates on "lives remain" (current life - 1).
//                    2. updates on "Score" (current - # of correct letters).
//                    3. hangman image updates.
//      if entirely correct:
//                    1. displays congradulation!
//                    2. prompt for user's name -> store name and score in an object?
//if life == 0:
//              1. display message: you're dead!
//              2. Hangman image displayed at 100%
//              3. prompt for user's name -> store name and score in an object?






//'restart' button:  the number of lives resets back to 7 , 
//and the word goes back to blank spaces 
//( everything resets including lives, score, and word altogether)






//'end' button: end the game. Ask user to enter their name.



