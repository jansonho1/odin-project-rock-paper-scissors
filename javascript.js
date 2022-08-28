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
    for(let i = 0; i < 5; i++) {
        let playerSelection = '';
        let computerSelection = '';
        let result = '';
        while(1) {
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
    }
    if(player > computer) {
        return "You win the game!";
    } else {
        return "You lose the game...";
    }
}

console.log(game());