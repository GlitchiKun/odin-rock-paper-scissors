function getComputerChoice() {
  choice = Math.random() * 3;

  if (choice < 1) {
    return "Rock";
  } else if (choice < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumainChoice() {
  return prompt("Rock, Paper or Scissors ?");
}

console.log(getHumainChoice());
