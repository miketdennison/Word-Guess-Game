var wordList = ["joffrey", "tywin", "ned"];
var gameStarted = false;
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
    document.getElementById("start-button").classList.remove("show");
    document.getElementById("start-button").classList.add("hide");
    gameStarted = true;
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
    document.getElementById("previous-guesses").textContent = "Previous Guesses: ";
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
            treasons++;
        }
        totalLettersGuessed.push(letter);
    }
}

function updateStats() {
    // Display Data on Document
    document.getElementById("word").textContent = correctGuesses.join(" ");
    document.getElementById("score").textContent = treasons + " of " + treasonsAllowed + " acts of treason";
    document.getElementById("guessed").textContent = totalLettersGuessed.join(" ");

    // If no underscores remain, we have a winner
    if (!correctGuesses.includes("_") && gameStarted) {
        alert("Winner, winner, chicken dinner!");
        document.getElementById("yt-video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/GWmGrR9a818?start=209" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementById("start-button").classList.add("show");
        document.getElementById("start-button").classList.remove("hide");
        gameStarted = false;
    } else if (treasons === treasonsAllowed && gameStarted) {
        alert("Off with yer head, traitor!");
        if (randomWord === "tywin") {
            document.getElementById("yt-video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SE2mpse6O1c?start=116" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (randomWord === "joffrey") {
            document.getElementById("yt-video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MbMFLDb3CbI?start=53" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (randomWord === "ned") {
            document.getElementById("yt-video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PW6wfXPeJTw?start=224" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
        document.getElementById("start-button").classList.add("show");
        document.getElementById("start-button").classList.remove("hide");
        gameStarted = false;
    }
}

// Initialize game setup
document.getElementById("start-button").onclick = function() {
    startGame();
}


// When player presses key, check the letter, and update stats
document.onkeypress = function (e) {
    if(gameStarted) {
        checkLetter(e.key.toLowerCase());
        updateStats();
    }
}