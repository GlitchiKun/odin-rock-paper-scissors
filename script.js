function playGame() {
  const NUMBER_OF_ROUND = 5;

  let computerScore = 0;
  let humanScore = 0;

  for (let i = 1; i <= NUMBER_OF_ROUND; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`Computer choice : ${computerChoice}`);

    winner = playRound(computerChoice, humanChoice);

    if (winner == "HUMAN") {
      humanScore++;
    } else if (winner == "COMPUTER") {
      computerScore++;
    }

    console.log(
      `Manche ${i}/${NUMBER_OF_ROUND} -> Computer : ${computerScore} | Human : ${humanScore}`,
    );
  }
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice == computerChoice) {
    console.log(`Draw ! Computer also choose ${computerChoice} !`);
    return;
  }

  const isHumanWin =
    (humanChoice == "ROCK" && computerChoice == "SCISSORS") ||
    (humanChoice == "PAPER" && computerChoice == "ROCK") ||
    (humanChoice == "SCISSORS" && computerChoice == "PAPER");

  if (isHumanWin) {
    console.log(`You win ! ${humanChoice} beats ${computerChoice}.`);
    return "HUMAN";
  } else {
    console.log(`You loose ! ${computerChoice} beats ${humanChoice}.`);
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

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors ?");
}

const rpsButton = document.querySelectorAll(".rps-button");
rpsButton.forEach((button) =>
  button.addEventListener("click", () =>
    playRound(getComputerChoice(), button.textContent),
  ),
);
