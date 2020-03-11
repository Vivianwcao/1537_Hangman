//initialize variables



//generate 10 words and their descriptions(hint) in a dictionary.




//generate 26 letters using object constructors.
let lettersContainer = document.getElementById('letters');

let list = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
list.sort();
function buttonGenerator(n) {
    let i;
    for (i = 0; i < n; i++) {
        let bttn = document.createElement("button");
        lettersContainer.appendChild(bttn);
        bttn.innerHTML = list[i];
        bttn.onclick = function click() {
            console.log('button ' + bttn.innerHTML + ' is clicked');
        }
    }
}
buttonGenerator(26);
            



//Blank lines:'_ _ _ _ _'





//randomly select a word as user refreshes the page.




//**check whether each guess is correct/matches the word shown:
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



