
const gameChoice = ['sword', 'shield', 'bow'];
const computerRoundsWon = 0;
const playerRoundsWon = 0;

document.addEventListener('DOMContentLoaded', function() {
    const swordButton = document.querySelector('.sword');
    const shieldButton = document.querySelector('.shield');
    const bowButton = document.querySelector('.bow');

    function buttonColorChange(button, color1, color2){
        button.style.backgroundColor = color1;
        button.style.borderColor = color2;
    }

    swordButton.addEventListener('mouseover', function() {
        buttonColorChange(swordButton, 'white', 'red');
    });

    swordButton.addEventListener('mouseout', function() {
        buttonColorChange(swordButton, 'rgb(175, 175, 175)', 'rgb(0, 134, 40)');
    });

    shieldButton.addEventListener('mouseover', function() {
        buttonColorChange(shieldButton, 'white', 'red');
    });

    shieldButton.addEventListener('mouseout', function() {
        buttonColorChange(shieldButton, 'rgb(175, 175, 175)', 'rgb(0, 134, 40)');
    });

    bowButton.addEventListener('mouseover', function() {
        buttonColorChange(bowButton, 'white', 'red');
    });

    bowButton.addEventListener('mouseout', function() {
        buttonColorChange(bowButton, 'rgb(175, 175, 175)', 'rgb(0, 134, 40)');
    });
});
// function game(){

//     for(let i = 1; i <= 5; i++){

//         alert(`The score is currnetly Player: ${playerRoundsWon} Computer: ${computerRoundsWon} Round ${i} go!`)

//         const playerChoice = prompt('Choose , Paper or Scissors').toLowerCase();
//         console.log(playerChoice);

//         let computerChoice = getComputerChoice(gameChoice);
//         console.log(computerChoice);

//         let gameOutcome = playGameRound(playerChoice, computerChoice);
//         console.log(gameOutcome);

//         function getComputerChoice(gameOptions){
//             return gameOptions[Math.floor((Math.random()*gameOptions.length))];
//             }

//         function playGameRound(playerSelection, computerSelection){
//             if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
//                 i--;
//                 return alert('Invalid input. Try again')
//             }
//             else if(playerSelection === 'rock' && computerSelection === 'paper'){
//                 computerRoundsWon++;
//                 return alert('You Lose! Paper beats Rock')
//             }
//             else if(playerSelection === 'paper' && computerSelection === 'scissors'){
//                 computerRoundsWon++;
//                 return alert('You Lose! Scissors beats Paper')
//             }
//             else if(playerSelection === 'scissors' && computerSelection === 'rock'){
//                 computerRoundsWon++;
//                 return alert('You Lose! Rock beats Scissors')
//             }
//             else if(playerSelection === 'rock' && computerSelection === 'rock'){
//                 i--;
//                 return alert('It\'s a tie! Try again')
//             }
//             else if(playerSelection === 'paper' && computerSelection === 'paper'){
//                 i--;
//                 return alert('It\'s a tie! Try again')
//             }
//             else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
//                 i--;
//                 return alert('It\'s a tie! Try again')
//             }
//             else{
//                 playerRoundsWon++;
//                 return alert('You win!')
                
//             }
//         }

//     }
//     return alert(`The final score is Player: ${playerRoundsWon} Computer: ${computerRoundsWon}`)
// }
