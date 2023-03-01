function getComputerChoice() {
// This function randomly returns rock, paper, or scissors.
    let num1 = Math.random();
    if (num1 <= 0.333) {
        return "ROCK";
    }else if (num1 > 0.333 && num1 <= 0.666) {
        return "PAPER";
    }else if (num1 > 0.666) {
        return "SCISSORS";
    }
}

function getPlayerChoice() {
// This function takes a valid input from the user
    const ask = prompt(["Rock, Paper, or Scissors?"]).toUpperCase();
    if (ask === 'ROCK'){
        return 'ROCK'
    } else if (ask === 'PAPER'){
        return 'PAPER'
    } else if (ask === 'SCISSORS'){
        return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "Win"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "Lose"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "Win"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "Lose"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "Win"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "Lose"
    }
}
    
const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice;
console.log(playRound(playerSelection, computerSelection));
    
for (let i = 0; i < 5; i++) {
        // your code here
}
    
function game() {
}
