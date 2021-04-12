const choices = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt(
            "Enter selection (Rock, Paper or Scissors): "
        );

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
            return playerChoice;
        }
    }
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
        return `You Lose ${computerSelection} beats ${playerSelection}`;
    } else if (playerWin) {
        return `You Win ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Draw ${playerSelection} is the same as ${computerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const message = playRound(playerChoice, computerChoice);

        if (message.includes("Win")) {
            playerScore++;
        } else if (message.includes("Lose")) {
            computerScore++;
        }

        console.log(message);
    }

    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

window.onload = function () {
    game();
};
