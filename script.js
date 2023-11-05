const gameChoice = ['sword', 'shield', 'bow'];
const computerRoundsWon = 0;
const playerRoundsWon = 0;
let currentChampionScore = 0;
let currentAdversaryScore = 0;
    
const weaponList = document.querySelector('#weapon-list');
const championScore = document.querySelector('.champion-score');
const adversaryScore = document.querySelector('.adversary-score');

championScore.textContent = currentChampionScore;
adversaryScore.textContent = currentAdversaryScore;

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
