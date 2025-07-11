let computerChoice = getComputerChoice();

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0){
        return "Rock";
    }
    else if (randomNumber == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

let humanChoice = getHumanChoice();

function getHumanChoice () {
    const userInput = prompt("Enter your choice: ");
    return userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {

}