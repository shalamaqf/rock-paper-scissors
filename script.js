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
    const userInput = prompt("Enter your choice (Rock, Paper, or Scissors): ");
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
    else if (computerScore < humanScore) {
        return "Congrats! You win the game :D";
    }
    else
    {
        return "Both tie! No one winning the game . . .";
    }
}

////////////////  USER INTERFACE  //////////////////

/* create three buttons element */
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


/* add text to the button */
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";


/* create a div element to wrap all buttons */
const buttonsContainer = document.createElement("div");
document.body.appendChild(buttonsContainer);


/* add all buttons to the div element */
buttonsContainer.appendChild(rock);
buttonsContainer.appendChild(paper);
buttonsContainer.appendChild(scissors);


/* create a div element to show the result */
const resultDiv = document.createElement("div")
resultDiv.setAttribute("id", "result");


/* create a div element to show the player choice */
const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.setAttribute("id", "playerChoice");


/* create a div element to show the computer choice */
const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.setAttribute("id", "computerChoice");


/* append the div element to the body */
document.body.appendChild(playerChoiceDiv);
document.body.appendChild(computerChoiceDiv);
document.body.appendChild(resultDiv);


/* add event listeners to the button */
rock.addEventListener('click', () => {
    /* show human choice */
    humanSelection = rock.textContent;
    playerChoiceDiv.textContent = "You choose: " + rock.textContent;

    /* show computer choice */
    computerSelection = getComputerChoice();
    computerChoiceDiv.textContent = "Opponent choose: " + computerSelection;

    /* play the game one round */
    resultDiv.textContent = playRound(computerSelection, humanSelection);

    /* show the score */
    showPlayerScore.textContent = "Your Score: " + humanScore;
    showComputerScore.textContent = "Opponent Score: " + computerScore;
});


paper.addEventListener('click', () => {
    humanSelection = paper.textContent;
    playerChoiceDiv.textContent = "You choose: " + paper.textContent;

    computerSelection = getComputerChoice();
    computerChoiceDiv.textContent = "Opponent choose: " + computerSelection;

    resultDiv.textContent = playRound(computerSelection, humanSelection);

    showPlayerScore.textContent = "Your Score: " + humanScore;
    showComputerScore.textContent = "Opponent Score: " + computerScore;
});


scissors.addEventListener('click', () => {
    humanSelection = scissors.textContent;
    playerChoiceDiv.textContent = "You choose: " + scissors.textContent;

    computerSelection = getComputerChoice();
    computerChoiceDiv.textContent = "Opponent choose: " + computerSelection;

    resultDiv.textContent = playRound(computerSelection, humanSelection);

    showPlayerScore.textContent = "Your Score: " + humanScore;
    showComputerScore.textContent = "Opponent Score: " + computerScore;
});

/* create a variable to keep in track the round */
let roundCount = 1;

/* create a div element to show the round */
let showRound = document.createElement("div");
showRound.setAttribute("id", "round");
document.body.appendChild(showRound);

/* create a div element to show player score */
let showPlayerScore = document.createElement("div");
showPlayerScore.setAttribute("id", "playerScore");
document.body.appendChild(showPlayerScore);

/* create a div element to show computer score */
let showComputerScore = document.createElement("div");
showComputerScore.setAttribute("id", "computerScore");
document.body.appendChild(showComputerScore);

/* create a div element to show if the player win or lose */
const finalResult = document.createElement("div");
finalResult.setAttribute("id", "finalResult");
document.body.appendChild(finalResult);