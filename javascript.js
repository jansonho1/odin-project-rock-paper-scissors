function getComputerChoice() {
    const options = ['Rock','Paper','Scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    const choices = new Map([['rock', -1], ['paper', 0], ['scissors', 1]]);
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if(choices.get(playerChoice) == null) {
        return "Not a valid input. Please try again.";
    }
    let difference = choices.get(playerChoice) - choices.get(computerChoice);
    if(Math.abs(difference) == 1) {
        if(difference > 0) {
            return "You Win! " + playerChoice + " beats " + computerChoice;
        } else {
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        }
    } else if(Math.abs(difference) == 2) {
        if(difference > 0) {
            return "You Lose! " + computerChoice + " beats " + playerChoice;
        } else {
            return "You Win! " + playerChoice + " beats " + computerChoice;
        }
    } else {
        return "Draw! " + playerChoice + " and " + computerChoice + " tie." 
    }
}

function game() {
    let player = 0;
    let computer = 0;
    while(1) {
        let playerSelection = '';
        let computerSelection = '';
        let result = '';
        playerSelection = prompt('Select rock, paper, or scissors: ');
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes('Win')) {
            player++;
            break;
        } else if(result.includes('Lose')) {
            computer++;
            break;
        }
    }
    if(player > computer) {
        return "You win the game!";
    } else {
        return "You lose the game...";
    }
}

let player = 0;
let computer = 0;
let result = "";


const divContainer = document.querySelector('#container');
const div = document.createElement('div');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const message = document.createElement('p');
playerScore.textContent = "Player score: " + player.toString();
computerScore.textContent = "Computer score: " + computer.toString();
message.textContent = result;
div.appendChild(playerScore);
div.appendChild(computerScore);
div.appendChild(message);
divContainer.appendChild(div);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.id, getComputerChoice());
        
        if(result.includes('Win')) {
            player++;
            playerScore.textContent = "Player score: " + player.toString();
        } else if(result.includes('Lose')) {
            computer++;
            computerScore.textContent = "Computer score: " + computer.toString();
        }
        if(player === 5) {
            result = "You win the game!";
            message.textContent = result;
        }
        else if(computer == 5) {
            result = "You lose the game...";
            message.textContent = result;
        }
    })
});



