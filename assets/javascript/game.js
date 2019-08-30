//Those variables are pointing to the differents id of the page :
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

//This textContent method prints on the screen the number of losses when the game started, which is 0:
lossesOnScreen.textContent = losses;

//This variable allows the computer to choose a letter from A to Z
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The computer can choose one of them randomly:
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//This textContent method prints on the screen the player's number of choices left:
leftOnScreen.textContent = choicesLeft;

//This block of code runs whenever we are done pressing a key:
document.onkeyup = function(e) {
        //This writes the chosen letter on the screen:
        console.log(e);
        letterOnScreen.textContent = e.key;
        //This if statement says that if the letter the player has chosen is the same that the one chosen by the computer, the player win: 
        if (e.key === computerLetter) {
            console.log("Correct");
            wins = wins + 1;
            winsOnScreen.textContent = wins;
            //I call the function resetGame to reset the score:
            resetGame();
        }
        //This if statement says that if the letter the player has chosen is the same that the one chosen by the computer, the player lose:
        if (e.key !== computerLetter) {
            console.log("Wrong");
            choicesLeft = choicesLeft - 1;
            leftOnScreen.textContent = choicesLeft;
            if (choicesLeft === 0) {
                losses = losses + 1;
                choicesLeft = 10;
                //This ligne of code prints on screen how many losses the player has:
                lossesOnScreen.textContent = losses;
                //I call the function resetGame to reset the score:
                resetGame();
            }
        }
        console.log(choicesLeft);
    }
    //This function reset the game to 10:
function resetGame() {
    console.log("ChoicesLeft");
    choicesLeft = 10;
    leftOnScreen.textContent = choicesLeft;
}