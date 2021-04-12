const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    const selection = Math.floor(Math.random() * 3);
    return choices[selection];
}