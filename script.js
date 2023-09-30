gameChoice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(computerChoice){
    return computerChoice[Math.floor((Math.random()*computerChoice.length))];
    }

console.log(getComputerChoice(gameChoice));