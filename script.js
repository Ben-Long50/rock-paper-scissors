const gameChoice = ['sword', 'shield', 'bow'];
const computerRoundsWon = 0;
const playerRoundsWon = 0;
let currentChampionScore = 0;
let currentAdversaryScore = 0;
    
const swordButton = document.querySelector('.sword');
const shieldButton = document.querySelector('.shield');
const bowButton = document.querySelector('.bow');
const championScore = document.querySelector('.champion-score');
const adversaryScore = document.querySelector('.adversary-score');

championScore.textContent = currentChampionScore;
adversaryScore.textContent = currentAdversaryScore;

function buttonColorChange(button, color1, color2){
    button.style.backgroundColor = color1;
    button.style.borderColor = color2;
}

function updateScores(){
    championScore.textContent = currentChampionScore;
    adversaryScore.textContent = currentAdversaryScore;
}

function gameEndCondition(){
    if(currentAdversaryScore === 5){
        alert('You\'ve been bested in combat. Try again! Victory is but a few clicks away!');
        currentAdversaryScore = 0;
        currentChampionScore = 0;
        updateScores();
    }
    else if(currentChampionScore === 5){
        alert('You are victorious in battle! On to the next adversary.');
        currentAdversaryScore = 0;
        currentChampionScore = 0;
        updateScores();
    }
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

swordButton.addEventListener('click', function(){
    const computerChoice = getComputerChoice(gameChoice);
    playerChoice = 'sword';
    playGameRound(playerChoice, computerChoice);
    gameEndCondition();
})

shieldButton.addEventListener('click', function(){
    const computerChoice = getComputerChoice(gameChoice);
    playerChoice = 'shield';
    playGameRound(playerChoice, computerChoice)
    gameEndCondition();
})

bowButton.addEventListener('click', function(){
    const computerChoice = getComputerChoice(gameChoice);
    playerChoice = 'bow';
    playGameRound(playerChoice, computerChoice);
    gameEndCondition();
})

function getComputerChoice(gameOptions){
    return gameOptions[Math.floor((Math.random()*gameOptions.length))];
}

function playGameRound(playerSelection, computerSelection){
    if(playerSelection === 'sword' && computerSelection === 'shield'){
        currentAdversaryScore++;
        updateScores();
        return alert('You Lose! Your attack was deflected')
    }
    else if(playerSelection === 'shield' && computerSelection === 'bow'){
        currentAdversaryScore++;
        updateScores();
        return alert('You Lose! You\'ve been shot in the leg')
    }
    else if(playerSelection === 'bow' && computerSelection === 'sword'){
        currentAdversaryScore++;
        updateScores();
        return alert('You Lose! You\'ve been stabbed in the back')
    }
    else if(playerSelection === 'sword' && computerSelection === 'sword'){
        return alert('It\'s a tie! Try again')
    }
    else if(playerSelection === 'shield' && computerSelection === 'shield'){
        return alert('It\'s a tie! Try again')
    }
    else if(playerSelection === 'bow' && computerSelection === 'bow'){
        return alert('It\'s a tie! Try again')
    }
    else{
        currentChampionScore++;
        updateScores();
        return alert('You win!')
    }
}
