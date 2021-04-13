const choices = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const resultText = document.createElement("h3");
const scoreDiv = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;
scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const result = playRound(e.target.textContent, getComputerChoice());

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    resultText.textContent = result;
  });
});

resultDiv.appendChild(resultText);

function getPlayerChoice() {
  let validInput = false;
  let playerChoice;

  do {
    playerChoice = prompt("Enter selection (Rock, Paper or Scissors): ");

    // Check if choice was not null
    if (playerChoice == null) {
      alert("Invalid input! Please enter (Rock, Paper or Scissors)");
      continue;
    }

    // Choice is expected to be capitalized
    playerChoice =
      playerChoice.slice(0, 1).toUpperCase() +
      playerChoice.slice(1).toLowerCase();

    // If user input is not in valid choices prompt for correct input
    if (!choices.includes(playerChoice)) {
      alert("Invalid input! Please enter (Rock, Paper or Scissors)");
    } else {
      validInput = true;
    }
  } while (!validInput);

  return playerChoice;
}

function getComputerChoice() {
  const selection = Math.floor(Math.random() * 3);
  return choices[selection];
}

function playRound(playerSelection, computerSelection) {
  playerWin = false;
  computerWin = false;

  // Rock is selected
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWin = true;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWin = true;
  }

  // Scissors is selected
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWin = true;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWin = true;
  }

  // Paper is selected
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWin = true;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWin = true;
  }

  // Check who won and return the resulting message
  if (computerWin) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerWin) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Draw! ${playerSelection} is the same as ${computerSelection}`;
  }
}