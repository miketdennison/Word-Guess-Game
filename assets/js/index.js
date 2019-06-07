var wordList = ["joffrey", "tywin", "ned"];
var randomWord = "";
var correctGuesses = [];
var totalLettersGuessed = [];
var letterGuessed;
var randomWordLength = 0;
var randomIndex = 0;
var treasonsAllowed = 5;
var treasons = 0;
var underScores = 0;

function reset() {
    randomWord = "";
    correctGuesses = [];
    totalLettersGuessed = [];
    letterGuessed;
    randomWordLength = 0;
    randomIndex = 0;
    treasonsAllowed = 5;
    treasons = 0;
    underScores = 0;
}

function startGame() {
    // Reset all values on subsequent gameplays
    reset();

    // Select random word and get its length
    randomIndex = Math.floor(Math.random() * wordList.length);
    randomWord = wordList[randomIndex];
    randomWordLength = wordList[randomIndex].length;

    // Fill blanks for the random word
    for (var i = 0; i < randomWordLength; i++) {
        correctGuesses.push("_");
    }

    // Display Data on Document
    document.getElementById("word").textContent = correctGuesses.join(" ");
    document.getElementById("score").textContent = treasons + " of " + treasonsAllowed + " acts of treason";
    document.getElementById("guessed").textContent = totalLettersGuessed.join(" ");
}

function checkLetter(letter) {
    // If the letter was guessed before, do nothing, otherwise continue
    if (!totalLettersGuessed.includes(letter)) {
        if (randomWord.includes(letter)) {
            for (var i = 0; i < randomWordLength; i++) {
                if (randomWord[i] === letter) {
                    correctGuesses[i] = letter;
                }
            }
        } else {
            totalLettersGuessed.push(letter);
            treasons++;
        }
    }
}

function updateStats() {
    // Display Data on Document
    document.getElementById("word").textContent = correctGuesses.join(" ");
    document.getElementById("score").textContent = treasons + " of " + treasonsAllowed + " acts of treason";
    document.getElementById("guessed").textContent = totalLettersGuessed.join(" ");

    if(!correctGuesses.includes("_")) {
        alert("Winner, winner, chicken dinner!");
        startGame();
    }
    else if(treasons === treasonsAllowed) {
        alert("Lahuuuuu-zuuuh-herrrr.");
        startGame();
    }
}

// Initialize game setup
startGame();

// When player presses key, check the letter, and update stats
document.onkeypress = function (e) {
    checkLetter(e.key.toLowerCase());
    updateStats();
}