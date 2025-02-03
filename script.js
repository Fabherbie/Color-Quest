const colors = ["red", "blue", "yellow", "pink", "purple", "orange"];
let targetColor = "";
let score = 0;

// const colorDivs = document.querySelectorAll(".color");

const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

function startGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colorOptions.innerHTML = "";

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");
    button.onclick = () => checkGuess(color);
    colorOptions.appendChild(button);
  });

  //   gameStatus.textContent = "Guess the color!";
  //   score = 0;
  //   scoreDisplay.textContent = score;

  gameStatus.textContent = "";

  newGameButton.style.display = "block";
}

function checkGuess(guess) {
  if (guess === targetColor) {
    score++;
    scoreDisplay.textContent = score;
    gameStatus.textContent = "✅ Correct!";
    gameStatus.style.color = "green";
  } else {
    gameStatus.textContent = "❌ Wrong! Try again.";
    gameStatus.style.color = "red";
  }

  scoreDisplay.textContent = score;
}

newGameButton.onclick = startGame;

startGame();
