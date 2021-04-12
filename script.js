const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
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
        const computerChoice = computerPlay();
        const message = playRound("Rock", computerChoice);

        if (message.includes("Win")) {
            playerScore++;
        } else if (message.includes("Lose")) {
            computerScore++;
        }

        console.log(message);
    }

    console.log(`Player: ${playerScore} - Computer: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}
