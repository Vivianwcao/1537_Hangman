//initialize variables
let score = 0;
let lives = 7;


//generate 10 words and their descriptions(hint) in a dictionary.
let blanks = document.getElementById("blanks");
let wordBank = ["committee", "weather", "canopy", "acronym", "electrograph", "hypothetical", "growing", "study", "yolk", "yellow"]
let guessedWord = ""
blanks.innerText = ""
let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
function generateBlanks() {

    for (i = 0; i < chosenWord.length; i++) {
        guessedWord = guessedWord + "_"
    }
    return guessedWord
}
if (chosenWord === "committee") {
    document.write("<h2>a person or group of persons elected or appointed to perform some service or function, as to investigate, report on, or act upon a particular matter.</h2>");
}if (chosenWord === "weather") {
    document.write("<h2>the state of the atmosphere with respect to wind, temperature, cloudiness, moisture, pressure, etc.</h2>");
}if (chosenWord === "canopy") {
    document.write("<h2>a covering, usually of fabric, supported on poles or suspended above a bed, throne, exalted personage, or sacred object.</h2>");
}if (chosenWord === "acronym") {
    document.write("<h2>a word formed from the initial letters or groups of letters of words in a set phrase or series of words and pronounced as a separate word</h2>");
}if (chosenWord === "electrograph") {
    document.write("<h2>a curve or plot automatically traced by the action of an electric device, as an electrometer or an electrically controlled pen.</h2>");
}if (chosenWord === "hypothetical") {
    document.write("<h2>assumed by hypothesis; supposed:</h2>");
}if (chosenWord === "growing"){
    document.write("<h2>becoming greater in quantity, size, extent, or intensity:</h2>");
}if (chosenWord === "study"){
    document.write("<h2>to apply oneself to the acquisition of knowledge, as by reading, investigation, or practice.</h2>");
}if (chosenWord === "yolk"){
    document.write("<h2>the yellow and principal substance of an egg, as distinguished from the white.</h2>");
}if (chosenWord === "yellow"){
    document.write("<h2>a color like that of egg yolk, ripe lemons, etc.; the primary color between green and orange in the visible spectrum, an effect of light with a wavelength between 570 and 590 nm.</h2>");
}
guessedWord = generateBlanks()



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

        bttn.style.width = "90px";
        bttn.style.height = "60px";
        bttn.style.borderRadius = "20px";
        bttn.style.fontSize = "40px";
        bttn.style.margin = "0.5%";
        bttn.style.marginLeft = "2%";
        bttn.style.color = "orange"
        // bttn
        
        bttn.onclick = function () {
            onLetterClick(this.innerHTML);
            setTimeout(function () { 
                gameOver(); }, 100)
                this.disabled = true;
        }
    }
}
function buttonGenerator(n) {
    let i;
    for (i = 0; i < n; i++) {
        let bttn = new buttons(list[i]);
        bttn.createButton();
    }
}
buttonGenerator(26); 


//Blank lines:'_ _ _ _ _'

function displayWord(word) {
    blanks.innerText = ""
    for (i = 0; i < word.length; i++) {
        blanks.innerText = blanks.textContent + " " + word[i]
    }
}

displayWord(guessedWord)


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
            score = score + 1
        }

    }
    guessedWord = guessedWord.join("")
}

function onLetterClick(letter) {
    if (checkLetterInWord(letter)) {
        replaceBlanksWithLetter(letter)
        displayWord(guessedWord)
        document.getElementById("score").innerHTML = "Score: " + score.toString()
    } else {
        lives = lives - 1
        if (lives >= 0) {
            document.getElementById("lives").innerHTML = "Lives remain: " + lives.toString()
            changeHangman()
        }


    }

}

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


function restart() {
    location.reload();
}
document.getElementById("restart").onclick = restart;
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









