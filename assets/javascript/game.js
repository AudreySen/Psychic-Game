console.log("Hello!")

var letter = document.getElementById("letter");
var wins = document.getElementById("wins");
var left = document.getElementById("left");
var lettersTried = document.getElementById("lettersTried");
var choicesLeft = 10;

document.onkeyup = function(event) {
    console.log(
        " Event Key is " + event.key + " The computer choice's was " + computerLetter
    )
    letter.textContent = event.key

    if (event.key === computerLetter) {
        console.log("Correct");
        choicesLeft = 10;
        wins = wins + 1;

    }
    if (event.key !== computerLetter) {
        console.log("Wrong");
        choicesLeft = choicesLeft - 1;
        if (choicesLeft = 0) {
            losses = losses + 1;
            choicesLeft = 10;
        }
    }
    console.log(choicesLeft);
}

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// console.log(computerLetter);



// var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];