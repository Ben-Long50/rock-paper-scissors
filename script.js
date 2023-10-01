
game();
function game(){
    let gameChoice = ['rock', 'paper', 'scissors'];
    let computerRoundsWon = 0;
    let playerRoundsWon = 0;

    for(let i = 1; i <= 5; i++){

        alert(`The score is currnetly Player: ${playerRoundsWon} Computer: ${computerRoundsWon} Round ${i} go!`)

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
            if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
                i--;
                return alert('Invalid input. Try again')
            }
            else if(playerSelection === 'rock' && computerSelection === 'paper'){
                computerRoundsWon++;
                return 'You Lose! Paper beats Rock'
            }
            else if(playerSelection === 'paper' && computerSelection === 'scissors'){
                computerRoundsWon++;
                return 'You Lose! Scissors beats Paper'
            }
            else if(playerSelection === 'scissors' && computerSelection === 'rock'){
                computerRoundsWon++;
                return 'You Lose! Rock beats Scissors'
            }
            else if(playerSelection === 'rock' && computerSelection === 'rock'){
                i--;
                return 'It\'s a tie! Try again'
            }
            else if(playerSelection === 'paper' && computerSelection === 'paper'){
                i--;
                return 'It\'s a tie! Try again'
            }
            else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
                i--;
                return 'It\'s a tie! Try again'
            }
            else{
                playerRoundsWon++;
                return 'You win!'
                
            }
        }

    }
    return alert(`The final score is Player: ${playerRoundsWon} Computer: ${computerRoundsWon}`)
}
