const secretPhrases = [
    "never", "you", "that", 
    "bullet", "break", "bardia",
    "hello", "thank you", "tree",
    "weather", "dog", "country",
];

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItem() {
    randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
    document.getElementById("letters").addEventListener("click", buttonHandler)
    window.addEventListener("keydown", keyHandler)
    console.log(randomItem)
}

function setUnderScores() {
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWon() {
    if (randomItem === result) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
    }
}

function checkIflost() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p>Random word is: ${randomItem}</p>`
    }
}

function updateHangmanPicture() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`
}

function letterHandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomItem.indexOf(letter) >= 0) {
        setUnderScores();
        checkIfWon();
    } else if (randomItem.indexOf(letter) === -1) {
        mistakes++;
        checkIflost();
        updateHangmanPicture()
    }
}

function buttonHandler(event) {
    letterHandler(event.target.id)
}

function keyHandler(event) {
    letterHandler(event.key)
}



selectRandomItem();
setUnderScores();