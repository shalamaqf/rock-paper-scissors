let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice () {
    const userInput = prompt("Enter your choice: ");
    return userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice == 'Rock'){
        if (computerChoice == 'Paper'){
            computerScore++;
            return "You lose! Paper beats Rock.";
        }
        else if (computerChoice == 'Scissors'){
            humanScore++;
            return "You win! Rock beats Scissors.";
        }
        else{
            return "Tie! Both choose Rock.";
        }
    }
    else if (humanChoice == 'Paper'){
        if (computerChoice == 'Rock'){
            humanScore++;
            return "You win! Paper beats Rock.";
        }
        else if (computerChoice == 'Scissors'){
            computerScore++;
            return "You lose! Scissors beats Paper.";
        }
        else{
            return "Tie! Both choose Paper.";
        }
    }
    else{
        if (computerChoice == 'Rock'){
            computerScore++;
            return "You lose! Rock beats Scissors.";
        }
        else if (computerChoice == 'Paper'){
            humanScore++;
            return "You win! Scissors beats Paper.";
        }
        else{
            return "Tie! Both choose Scissors.";
        }
    }

}

function playGame(){
    for (let i = 1; i <= 5; i++){
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        humanSelection = getHumanChoice();
        console.log(humanSelection);
        console.log(playRound(computerSelection, humanSelection));
    }

    console.log("Opponent Score: ", computerScore);
    console.log("Your Score: ", humanScore);

}
