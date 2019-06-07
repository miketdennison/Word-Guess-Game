var gameStarted = false;

function startGame() {
    // Generate a random word 
    var words = ["joffrey", "tywin", "ned"];
    var wordLength = words.length;
    var randomWord = Math.floor(Math.random() * wordLength);
    var randomWordLength = words[randomWord].length;
    var correctGuesses = Array(randomWordLength).fill("_ ");
    var totalGuesses = [];

    // Add underscores the length of the random word
    for(var i = 0; i < randomWordLength; i++) {
        var currentContent = document.getElementsByClassName("word")[0];
        currentContent.textContent = currentContent.textContent + correctGuesses[i];
    }

    addEventListener("keypress", function (e) {
        var letter = e.key.toLowerCase();
        if(words[randomWord].includes(letter)) {
            var updateUnderscore = words[randomWord].indexOf(letter);
            if(updateUnderscore === 0) {
                correctGuesses[updateUnderscore] = letter.toUpperCase();
            }
            else {
                correctGuesses[updateUnderscore] = letter
            }
            currentContent.textContent = "";
            for (var i = 0; i < randomWordLength; i++) {
                currentContent.textContent = currentContent.textContent + correctGuesses[i]; 
            }
        }
        totalGuesses.push(letter);
        var lettersGuessed = document.getElementsByClassName("guessed")[0];
        lettersGuessed.textContent = lettersGuessed.textContent + totalGuesses[totalGuesses.length - 1];
        
    });
}

// Add event listener for first key press, start the game, and remove listener
function firstKeyPress() {
    document.getElementsByClassName("title")[0].textContent = "Goodluck!"
    document.getElementsByClassName("intro")[0].textContent = "Guess a letter: "
    startGame();
    removeEventListener("keypress", firstKeyPress);
}

addEventListener("keypress", firstKeyPress);
