let currentPlayer = "X";
let moves = ["", "", "", "", "", "", "", "", ""];
let xScore = 0;
let oScore = 0;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const popup = document.getElementById("popup");
const result = document.getElementById("result");
const xScoreDisplay = document.getElementById("xScore");
const oScoreDisplay = document.getElementById("oScore");

function makeMove(index) {
  if (moves[index] === "") {
    moves[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWin()) {
      endGame(currentPlayer + " wins!");
    } else if (checkDraw()) {
      endGame("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  return winConditions.some((condition) => {
    return condition.every((index) => {
      return moves[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return moves.every((move) => move !== "");
}

function endGame(message) {
  popup.style.display = "flex";
  result.textContent = message;
  if (message.includes("X wins")) {
    xScore++;
  } else if (message.includes("O wins")) {
    oScore++;
  }
  xScoreDisplay.textContent = xScore;
  oScoreDisplay.textContent = oScore;
}

function restartGame() {
  moves = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  popup.style.display = "none";
}