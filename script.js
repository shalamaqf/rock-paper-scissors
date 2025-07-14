/*  Declare computerSelection and humanSelection to store the selection of computer and human
    Declare computerScore and humanScore to store and keeps in track the score */

let computerSelection;
let humanSelection;
let computerScore = 0;
let humanScore = 0;



/*  Declare getComputerChoice function to get the computer choice between rock, paper, and scissors
    Use Math.random multiplied by 3 and then floored it to generate number between 0, 1, and 2
    Create conditional statement to return the computer choice */

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



/*  Declare getHumanChoice function to get the human choice between rock, paper, and scissors
    Use prompt to ask the user and store the answer inside the userInput variable
    Make the userInput will always be upper case for the first letter and lower case for the rest
    Return the userInput */

function getHumanChoice () {
    const userInput = prompt("Enter your choice: ");
    return userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
}



/*  Declare playRound function with two parameters (computerChoice and humanChoice) to play the game one round
    Compare the player's answer using conditional statement
    The conditional statement will return a string that tells who's the winner */

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



/*  Declare compareScore function to compare the score between computer and human
    It will return a string that tells who win the entire game */

function compareScore(computerScore, humanScore){
    if (computerScore > humanScore){
        return "You lose the game! Try next time :(";
    }
    else
    {
        return "Congrats! You win the game :D";
    }
}



/*  Decalre playGame function to play the entire game by call playRound 5 times
    Create a for loop to call playRound function 5 times
    Declare computerSelection and humanSelection variable inside the for loop
    Call playRound function inside the loop
    After loop, print out the computer and human score
    Call the compareScore function to tells who's win the entire game */
    
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

    console.log(compareScore(computerScore, humanScore));

}



/* Call playGame function to play the entire game */

console.log(playGame());