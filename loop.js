let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";

let moveList = ["Rock", "Paper", "Scissor"];

let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

// Random Move
let randomMove = () => Math.floor(Math.random() * 3);

// Calculate Result
let calcResult = (move1, move2) => {
  if (move1 === move2) {
    return tieMsg;
  } else if (
    (move1 === moveList[0] && move2 === moveList[2]) ||
    (move1 === moveList[1] && move2 === moveList[0]) ||
    (move1 === moveList[2] && move2 === moveList[1])
  ) {
    return winMsg;
  } else {
    return loseMsg;
  }
};

// Start Game
let startGame = () => {
  moveDisplays[0].textContent = "";
  moveDisplays[1].textContent = "";
  // Starting display
  statusDisplay.textContent = "Choose!";

  buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
  });

  // Event listner
  for (let i = 0; i < moveList.length; i++) {
    buttons[i].addEventListener("click", () => endGame(moveList[i]));
  }
};

// End Game
let endGame = (playerMove) => {
  let move1 = playerMove; // Player move
  let move2 = moveList[randomMove()]; // Computer move
  // Display result
  statusDisplay.textContent = calcResult(move1, move2);
  // Try again button
  for (let i = 0; i < 2; i++) {
    buttons[i].style.display = "none";
  }
  buttons[2].textContent = "Play Again";
  buttons[2].addEventListener("click", () => startGame()); // Start game when button pressed
  // Display move
  moveDisplays[0].textContent = `You played ${move1}`;
  moveDisplays[1].textContent = `Computer played ${move2}`;
};

startGame();
