function getComputerChoice() {
    let num1 = Math.random();
    if (num1 <= 0.333) {
        return "ROCK";
    }else if (num1 > 0.333 && num1 <= 0.666) {
        return "PAPER";
    }else if (num1 > 0.666) {
        return "SCISSORS";
    }
}


function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
