
game();
function game(){
    let gameChoice = ['rock', 'paper', 'scissors'];
    for(let i = 1; i <= 5; i++){

        alert(`Round ${i} go!`)
        let playerChoice = prompt('Choose Rock, Paper or Scissors').toLowerCase();
        console.log(playerChoice);

        let computerChoice = getComputerChoice(gameChoice);
        console.log(computerChoice);

        let gameOutcome = playGameRound(playerChoice, computerChoice);
        console.log(gameOutcome);

        function getComputerChoice(gameOptions){
            return gameOptions[Math.floor((Math.random()*gameOptions.length))];
            }

        function playGameRound(playerSelection, computerSelection){
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                return 'You Lose! Paper beats Rock'
            }
            else if(playerSelection === 'paper' && computerSelection === 'scissors'){
                return 'You Lose! Scissors beats Paper'
            }
            else if(playerSelection === 'scissors' && computerSelection === 'rock'){
                return 'You Lose! Rock beats Scissors'
            }
            else if(playerSelection === 'rock' && computerSelection === 'rock'){
                return 'It\'s a tie!'
            }
            else if(playerSelection === 'paper' && computerSelection === 'paper'){
                return 'It\'s a tie!'
            }
            else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
                return 'It\'s a tie!'
            }
            else{
                return 'You win!'
            }
        }

    }
}
