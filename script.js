computerScore = 0;
humainScore = 0;

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

function getHumainChoice() {
  return prompt("Rock, Paper or Scissors ?");
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
    humainScore++;
  } else {
    console.log(`You loose ! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
}

playRound("PAPER", "ROCK");
