//variables which pointing to the differents id of the page
var letterOnScreen = document.getElementById("letter");
var winsOnScreen = document.getElementById("wins");
var lossesOnScreen = document.getElementById('losses');
var leftOnScreen = document.getElementById("left");
var lettersTried = document.getElementById("lettersTried");


//The player has ten choices left:
var choicesLeft = 10;
var wins = 0;
var losses = 0;
//This line of code prints on the screen the number of wins when the game started, which is 0:
winsOnScreen.textContent = wins;
//This line of code prints on the screen the number of losses when the game started, which is 0:
lossesOnScreen.textContent = losses;
//This variable allows the computer to choose a letter from A to Z
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//The computer can choose one of them randomly:
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//This write on the screen the player's number of choices left:
leftOnScreen.textContent = choicesLeft;

//This block of code runs whenever we are done pressing a key:
document.onkeyup = function(event) {
        //This writes the chosen letter on the screen:
        letterOnScreen.textContent = event.key;
        //This if statement says that if the letter the player has chosen is the same that the one chosen by the computer, the player win: 
        if (event.key === computerLetter) {
            console.log("Correct");
            choicesLeft = 10;
            wins = wins + 1;
            winsOnScreen.textContent = wins;
        }
        //This if statement says that if the letter the player has chosen is the same that the one chosen by the computer, the player lose:
        if (event.key !== computerLetter) {
            console.log("Wrong");
            choicesLeft = choicesLeft - 1;
            leftOnScreen.textContent = choicesLeft;
            if (choicesLeft === 0) {
                losses = losses + 1;
                choicesLeft = 10;
                //This ligne of code prints on screen how many losses the player has:
                lossesOnScreen.textContent = losses;
            }
        }
        console.log(choicesLeft);
    }
    // Array to tell the computer which letter to choose:



//
// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var wins = 0;
// var loses = 0;
// var guessesLeft, guessedLetters, letterToGuess;

// resetGame();
// display();

// document.onkeyup = function(event) {
//   var guess = event.key;
//   if (guess === letterToGuess) {
//     win();
//   } else if (guessesLeft - 1 === 0) {
//     lost();
//   } else {
//     fail(guess);
//   }

//   display();
// }

// function display() {
//   var winsP = document.getElementById("wins");
//   var losesP = document.getElementById("loses");
//   var guessLeft = document.getElementById("guessLeft");
//   var letterGuessed = document.getElementById("guessed");
//   winsP.innerHTML = wins;
//   losesP.innerHTML = loses;
//   guessLeft.innerHTML = guessesLeft;
//   letterGuessed.innerHTML = guessedLetters.join(',');
// }

// function win() {
//   wins++;
//   resetGame();
// }

// function lost() {
//   loses++;
//   resetGame();
// }

// function fail(letter) {
//   guessesLeft--;
//   guessedLetters.push(letter);
// }

// function resetGame() {
//   guessesLeft = 12;
//   guessedLetters = [];
//   letterToGuess = letters[Math.floor(Math.random() * letters.length)];
//   console.log("Letter to guess: " + letterToGuess);
// }
//