const gameChoice = ['sword', 'shield', 'bow'];
const computerRoundsWon = 0;
const playerRoundsWon = 0;
let currentChampionScore = 0;
let currentAdversaryScore = 0;
    
const weaponList = document.querySelector('#weapon-list');
const championScore = document.querySelector('.champion-score');
const adversaryScore = document.querySelector('.adversary-score');
const outcomeMessage = document.querySelector('#outcome-message')

championScore.textContent = currentChampionScore;
adversaryScore.textContent = currentAdversaryScore;

function updateScores(){
    championScore.textContent = currentChampionScore;
    adversaryScore.textContent = currentAdversaryScore;
}

function gameEndCondition(){
    if(currentAdversaryScore === 5){
        outcomeMessage.textContent = 'You\'ve been bested in combat. Try again! Victory is but a few clicks away!';
        currentAdversaryScore = 0;
        currentChampionScore = 0;
        updateScores();
    }
    else if(currentChampionScore === 5){
        outcomeMessage.textContent = 'You are victorious in battle! On to the next adversary.';
        currentAdversaryScore = 0;
        currentChampionScore = 0;
        updateScores();
    }
}

weaponList.addEventListener('mouseover', function(e){
    if(e.target.matches('button')){
        e.target.classList.add('hovered-weapon');
    }
})

weaponList.addEventListener('mouseout', function(e){
    if(e.target.matches('button')){
        e.target.classList.remove('hovered-weapon');
    }
})

weaponList.addEventListener('click', function(e){
    if(e.target.matches('button')){
        e.target.classList.remove('hovered-weapon');
    }
})

weaponList.addEventListener('click', function(e){
    if(e.target.matches('button')){
        const computerChoice = getComputerChoice(gameChoice);
        playerChoice = e.target.getAttribute('class');
        playGameRound(playerChoice, computerChoice);
        gameEndCondition();
    }
})

function getComputerChoice(gameOptions){
    return gameOptions[Math.floor((Math.random()*gameOptions.length))];
}

function playGameRound(playerSelection, computerSelection){
    if(playerSelection === 'sword' && computerSelection === 'shield'){
        currentAdversaryScore++;
        updateScores();
        outcomeMessage.textContent =  'You Lose! Your adversary selected sheild. Your attack was deflected';
        return;
    }
    else if(playerSelection === 'shield' && computerSelection === 'bow'){
        currentAdversaryScore++;
        updateScores();
        outcomeMessage.textContent =  'You Lose! Your adversary selected bow. You\'ve been shot in the leg';
        return;
    }
    else if(playerSelection === 'bow' && computerSelection === 'sword'){
        currentAdversaryScore++;
        updateScores();
        outcomeMessage.textContent =  'You Lose! Your adversary selected sword. You\'ve been stabbed in the back';
        return;
    }
    else if(playerSelection === 'sword' && computerSelection === 'sword'){
        outcomeMessage.textContent =  'It\'s a tie! Try again';
        return;
    }
    else if(playerSelection === 'shield' && computerSelection === 'shield'){
        outcomeMessage.textContent =  'It\'s a tie! Try again';
        return;
    }
    else if(playerSelection === 'bow' && computerSelection === 'bow'){
        outcomeMessage.textContent =  'It\'s a tie! Try again';
        return;
    }
    else{
        currentChampionScore++;
        updateScores();
        outcomeMessage.textContent = 'You win!';
        return;
    }
}
