function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return 'rock';
  } else if (computerChoice === 2) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

function getHumanChoice() {
    document.querySelector('.rock').addEventListener('click', () => playRound('rock'));
    document.querySelector('.paper').addEventListener('click', () => playRound('paper'));
    document.querySelector('.scissors').addEventListener('click', () => playRound('scissors'));
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const result = document.querySelector('.result');
const humanScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const finalResult = document.querySelector('.final-result');

function playRound(humanChoice) {
    if (gameOver) return;
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        humanScoreDisplay.innerHTML = `${humanScore}`;
         computerScoreDisplay.innerHTML = `${computerScore}`
      result.innerHTML += `Tie. Both chose ${computerChoice}. <br>` ;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
             humanChoice === 'paper' && computerChoice === 'rock' ||
             humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        humanScoreDisplay.innerHTML = `${humanScore}`;
        computerScoreDisplay.innerHTML = `${computerScore}`;
        result.innerHTML += `You win! ${humanChoice} beats ${computerChoice}. <br>`;
    }
    else {
        computerScore++;
        humanScoreDisplay.innerHTML = `${humanScore}`;
        computerScoreDisplay.innerHTML = `${computerScore}`;
        result.innerHTML += `You lose! ${computerChoice} beats ${humanChoice}. <br>`;
    }
    if (humanScore === 5) {
        finalResult.innerHTML = 'You win the game!';
        gameOver = true;
    } else if (computerScore === 5) {
        finalResult.innerHTML = 'Computer wins the game!';
        gameOver = true;
    }
}

getHumanChoice();
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.innerHTML = `${humanScore}`;
    computerScoreDisplay.innerHTML = `${computerScore}`;
    result.innerHTML = '';
    finalResult.innerHTML = '';
    gameOver = false;
}