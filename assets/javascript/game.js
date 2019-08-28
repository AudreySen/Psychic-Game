console.log("Hello!")

var letter = document.getElementById("letter");
var wins = document.getElementById("wins");
var left = document.getElementById("left");
var lettersTried = document.getElementById("lettersTried");



document.onkeyup = function(event) {
    console.log(event.key)
    letter.textContent = event.key

    if (event.key === computerLetter) {
        console.log("Correct");
    }
    if (event.key !== computerLetter) {
        console.log("Wrong");
    }
}

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];