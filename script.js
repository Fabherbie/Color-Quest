const colors = ["red", "blue", "yellow", "pink", "purple", "orange"];
let targetColor = "";
let score = 0;
let attemptsLeft = 3;

const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

function startGame() {
  if (attemptsLeft === 0) {
    score = 0;
    attemptsLeft = 3;
  }

  gameStatus.textContent = `Guess the color! Lives: ${attemptsLeft}`;
  gameStatus.style.color = "black";

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colorOptions.innerHTML = "";
  colors.forEach((color) => {
    const button = document.createElement("button");
    button.classList.add("colorButton");
    button.style.backgroundColor = color;
    button.onclick = () => checkGuess(color);
    colorOptions.appendChild(button);
  });

  scoreDisplay.textContent = `Score: ${score}`;
  newGameButton.style.display = "block";
}

function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    score++;
    gameStatus.textContent = "Correct! 🎉";
    gameStatus.style.color = "green";
    setTimeout(startGame, 1000);
  } else {
    attemptsLeft--;
    gameStatus.textContent = `Wrong! ❌ ${attemptsLeft} Lives left.`;
    gameStatus.style.color = "red";

    if (attemptsLeft === 0) {
      gameStatus.textContent = `Game Over! Final Score: ${score}`;
      gameStatus.style.color = "black";
    }
  }

  scoreDisplay.textContent = `Score: ${score}`;
}

newGameButton.addEventListener("click", () => {
  score = 0;
  attemptsLeft = 3;
  startGame();
});

startGame();
