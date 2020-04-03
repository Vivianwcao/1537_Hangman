//initialize variables
let score = 0;
let lives = 7;


//generate 10 words and their descriptions(hint) in a dictionary.

let blanks = document.getElementById("blanks");
let wordBank = ["committee", "weather", "canopy", "acronym", "electrograph", "hypothetical", "growing", "study", "yolk", "yellow"]
let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
let guessedWord = ""
blanks.innerText = ""
let wordPosition = wordBank.indexOf(chosenWord);
let description = document.getElementById('description')
let descriptions = ['A group of people appointed for a specific function.', 'A perfect topic for smalltalking', 'A tent like thing that can protect you from sun or rain', 'The term to say "Do it yourself" as "DIY"', 'A phototelegraphic apparatus for the electrical transmission of pictures.', 'Another term for "theoretical"', 'Another term for "increasing"', 'What we\'ve been doing 24/7 at BCIT', 'A part of an egg', 'A color'];

description.innerHTML = descriptions[wordPosition];

//Create correct amount of blank lines for the randomly chosen word
function generateBlanks() {

    for (i = 0; i < chosenWord.length; i++) {
        guessedWord = guessedWord + "_";
    }
    return guessedWord
}
guessedWord = generateBlanks();


//generate 26 letters using object constructors.
let lettersContainer = document.getElementById('letters');

let list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
list.sort();

function buttons(id) {
    this.id = id;
    this.createButton = function () {
        let bttn = document.createElement("button");
        document.body.appendChild(bttn);
        bttn.innerHTML = this.id;
        bttn.onclick = function () {
            onLetterClick(this.innerHTML);
            setTimeout(function () { 
                gameOver(); }, 100)
                this.disabled = true;
        }
    }
}

//create buttons for every letter
function buttonGenerator(n) {
    let i;
    for (i = 0; i < n; i++) {
        let bttn = new buttons(list[i]);
        bttn.createButton();
    }
}
buttonGenerator(26); 


//Blank lines:'_ _ _ _ _'

// display the word blanks to the user.
function displayWord(word) {
    blanks.innerText = ""
    for (i = 0; i < word.length; i++) {
        blanks.innerText = blanks.textContent + " " + word[i]
    }
}

displayWord(guessedWord)



// check whether each guess is correct/matches the word shown:
function checkLetterInWord(letter) {
    for (i = 0; i < chosenWord.length; i++) {
        if (chosenWord.includes(letter)) {
            return true
        } else {
            return false
        }

    }
}

// Replace blank line with letter of word 
function replaceBlanksWithLetter(letter) {
    guessedWord = guessedWord.split("")
    for (i = 0; i < guessedWord.length; i++) {
        if (chosenWord[i] == letter) {
            guessedWord[i] = letter
            score = score + 1
        }

    }
    guessedWord = guessedWord.join("")
}

// When letters are clicked, check if the letter is correct and make appropriate changes to game-state
function onLetterClick(letter) {
    if (checkLetterInWord(letter)) {
        replaceBlanksWithLetter(letter)
        displayWord(guessedWord)
        document.getElementById("score").innerHTML = "Score: " + score.toString()
    } else {
        lives = lives - 1
        if (lives >= 0) {
            document.getElementById("lives").innerHTML = "Lives remain: " + lives.toString();
            changeHangman();
        }


    }

}

// Display the correct hangman picture for for the lives the user has left
function changeHangman() {
    if (lives == 6) {
        document.getElementById("hangMan").src = "images/onemistakes.png"
    }
    if (lives == 5) {
        document.getElementById("hangMan").src = "images/twomistakes.png"
    }
    if (lives == 4) {
        document.getElementById("hangMan").src = "images/threemistakes.png"
    }
    if (lives == 3) {
        document.getElementById("hangMan").src = "images/fourmistakes.png"
    }
    if (lives == 2) {
        document.getElementById("hangMan").src = "images/fivemistakes.png"
    }
    if (lives == 1) {
        document.getElementById("hangMan").src = "images/sixmistakes.png"
    }
    if (lives == 0) {
        document.getElementById("hangMan").src = "images/7mistakes.png"
    }

}

//When game is over tell the user their score
function gameOver() {
    let name = ""
    wordComplete = true
    for (i = 0; i < guessedWord.length; i++) {
        if (guessedWord.includes("_")) {
            wordComplete = false
        }
    }
    if (wordComplete) {
        document.getElementById("gameover").innerText = "Congratulations"
        name = prompt("Enter your name:")
        document.getElementById("gameover").innerText = "Congratulations " + name + "! your score is " + score.toString()
    }

    if (lives < 0) {
        document.getElementById("gameover").innerText = "GAME OVER"
        name = prompt("Enter your name:")
        document.getElementById("gameover").innerText = "GAME OVER " + name + " your score is " + score.toString() + ". Better luck next time!"
        document.getElementById("hangMan").src = "images/dead.png"
    }

}

//'end' button: end the game. Ask user to enter their name.
function endGame() {
    document.getElementById("gameover").innerText = "GAME OVER"
    name = prompt("Enter your name:")
    document.getElementById("gameover").innerText = "GAME OVER " + name + " your score is " + score.toString() + ". Better luck next time!"
    document.getElementById("hangMan").src = "images/dead.png"

}
document.getElementById("endButton").onclick = endGame;

//'restart' button:  the number of lives resets back to 7 , 
//and the word goes back to blank spaces 
//( everything resets including lives, score, and word altogether)

// function restart() {
//     document.getElementById('lives').innerHTML = 'Lives remain: 7';
//     document.getElementById('score').innerHTML = 'Score: 0'
//     lives = 7;
//     changeHangman();
//     generateBlanks();
//     replaceBlanksWithLetter('_');

// }
function restartGame() {
    location.reload();
    return false;
}
document.getElementById('restart').onclick = restartGame;











