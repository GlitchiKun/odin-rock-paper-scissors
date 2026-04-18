const SCORE_FOR_WIN = 5;
let computerScore = 0;
let playerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const computerSpan = document.querySelector("#computer-choice");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

const rpsButton = document.querySelectorAll(".rps-button");

rpsButton.forEach((button) =>
  button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    computerSpan.textContent = computerChoice;
    const winner = playRound(computerChoice, button.textContent);

    if (winner == "HUMAN") {
      playerScore++;
    } else if (winner == "COMPUTER") {
      computerScore++;
    }

    updateScore();

    if (playerScore == SCORE_FOR_WIN || computerScore == SCORE_FOR_WIN) {
      endGame();
    }
  }),
);

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice == computerChoice) {
    result.textContent = `Draw ! Computer also choose ${computerChoice} !`;
    return;
  }

  const isHumanWin =
    (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
    (humanChoice == "PAPER" && computerChoice == "ROCK") ||
    (humanChoice == "SCISSORS" && computerChoice == "PAPER");

  if (isHumanWin) {
    result.textContent = `You win ! ${humanChoice} beats ${computerChoice}.`;
    return "HUMAN";
  } else {
    result.textContent = `You loose ! ${computerChoice} beats ${humanChoice}.`;
    return "COMPUTER";
  }
}

function getComputerChoice() {
  choice = Math.random() * 3;

  if (choice < 1) {
    return "ROCK";
  } else if (choice < 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function endGame() {
  rpsButton.forEach((button) => (button.disabled = true));

  const endGameDiv = document.createElement("div");
  const winnerAnnouncement = document.createTextNode(
    playerScore == SCORE_FOR_WIN
      ? "You win ! Congratulations !"
      : "Too bad ! You loose. Try again !",
  );

  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try again";
  tryAgainButton.addEventListener("click", () => {
    resetScore();
    rpsButton.forEach((button) => {
      button.disabled = false;
      endGameDiv.remove();
    });
  });
  endGameDiv.appendChild(winnerAnnouncement);
  endGameDiv.appendChild(tryAgainButton);
  score.appendChild(endGameDiv);
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;

  updateScore();
}

function updateScore() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}
