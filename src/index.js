import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>
</div>
`;

function startGame() {
  for (var i = 1; i <= 25; i++) {
    clearBoard(i);
  }
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(cell) {
  if (document.winner != null) {
    alert(document.winner + " already won.");
  } else if (cell.innerText === "") {
    cell.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("Cell already used.");
  }
}

function switchTurn() {
  if (checkWinner(document.turn)) {
    alert("Player " + document.turn + " won!");
    document.winner = document.turn;
  } else if (document.turn === "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn.");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn.");
  }
}

function checkWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, 4, 5, move) ||
    checkRow(6, 7, 8, 9, 10, move) ||
    checkRow(11, 12, 13, 14, 15, move) ||
    checkRow(16, 17, 18, 19, 20, move) ||
    checkRow(21, 22, 23, 24, 25, move) ||
    checkRow(1, 6, 11, 16, 21, move) ||
    checkRow(2, 7, 12, 17, 22, move) ||
    checkRow(3, 8, 13, 18, 23, move) ||
    checkRow(4, 9, 14, 19, 24, move) ||
    checkRow(5, 10, 15, 20, 25, move) ||
    checkRow(1, 7, 13, 19, 25, move) ||
    checkRow(5, 9, 13, 17, 21, move)
  ) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, d, e, move) {
  var result = false;
  if (
    getCell(a) === move &&
    getCell(b) === move &&
    getCell(c) === move &&
    getCell(d) === move &&
    getCell(e) === move
  ) {
    result = true;
  }
  return result;
}

function getCell(number) {
  return document.getElementById("c" + number).innerText;
}

function clearBoard(number) {
  document.getElementById("c" + number).innerText = "";
}
startGame();
skdchjsdbc;
document.getElementById("board").addEventListener("click", nextMove);
