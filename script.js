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
}