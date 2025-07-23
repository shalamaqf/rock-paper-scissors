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

///////////////////////////////////  USER INTERFACE  ///////////////////////////////////////////////

// Create buttons for player choices: Rock, Paper, or Scissors 
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


// Add text labels to the buttons
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";


// Create a container to wrap the buttons and add it to the DOM
const buttonsContainer = document.createElement("div");
document.body.appendChild(buttonsContainer);


// Append buttons to the container div 
buttonsContainer.appendChild(rock);
buttonsContainer.appendChild(paper);
buttonsContainer.appendChild(scissors);


// Create divs to display game information
const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.setAttribute("id", "playerChoice");

const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.setAttribute("id", "computerChoice");

const resultDiv = document.createElement("div")
resultDiv.setAttribute("id", "result");


// Create divs to show current round and scores
let roundCount = 0;

let showRound = document.createElement("div");
showRound.setAttribute("id", "round");

let showPlayerScore = document.createElement("div");
showPlayerScore.setAttribute("id", "playerScore");

let showComputerScore = document.createElement("div");
showComputerScore.setAttribute("id", "computerScore");


// Div to show the final result when game ends
const finalResult = document.createElement("div");
finalResult.setAttribute("id", "finalResult");


// Append divs to DOM
document.body.appendChild(showRound);
document.body.appendChild(playerChoiceDiv);
document.body.appendChild(computerChoiceDiv);
document.body.appendChild(resultDiv);
document.body.appendChild(showPlayerScore);
document.body.appendChild(showComputerScore);
document.body.appendChild(finalResult);


/* Update round display, disable buttons, and shows final game result
   when 5 rounds have been played. */
function handleGameOver(){
    if (roundCount >= 5){
        showRound.textContent = "Round: 5 (Last Round)";
        finalResult.textContent = compareScore(computerScore, humanScore);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else{
        showRound.textContent = "Round: " + roundCount;
    }
}


/* Handles a single round of the game:
   - Update player's and computer's choices on UI
   - Runs the game logic for the round
   - Update scores and round count */
function playRoundHandler(playerChoice){
    humanSelection = playerChoice;
    playerChoiceDiv.textContent = "You choose: " + playerChoice;

    computerSelection = getComputerChoice();
    computerChoiceDiv.textContent = "Opponent choose: " + computerSelection;

    resultDiv.textContent = playRound(computerSelection, humanSelection);

    showPlayerScore.textContent = "Your Score: " + humanScore;
    showComputerScore.textContent = "Opponent Score: " + computerScore;

    roundCount++;
}


// Attach event listeners to buttons and handle one round of the game
rock.addEventListener('click', () => {
    playRoundHandler(rock.textContent);
    handleGameOver();
});

paper.addEventListener('click', () => {
    playRoundHandler(paper.textContent);
    handleGameOver();
});

scissors.addEventListener('click', () => {
    playRoundHandler(scissors.textContent);
    handleGameOver();
});