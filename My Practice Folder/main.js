const choices = ['rock', 'paper', 'scissors'];
const playersChoices = document.getElementById('playersChoices');
const playerDisplay = document.getElementById('player');
const computerDisplay = document.getElementById('computer');
const gameResult = document.getElementById('message');

let result;

function playGame(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  
  if (playerChoice === computerChoice) {
    console.log("It's a draw. TRY AGAIN");
  } else {
    switch (playerChoice) {
      case 'rock':
        result = (computerChoice === 'scissors') ? 'You WIN!' : 'You LOSE!'
        break;
      case 'paper':
        result = (computerChoice === 'rock') ? 'You WIN!' : 'You LOSE!'
        break;
      case 'scissors':
        result = (computerChoice === 'paper') ? 'You WIN!' : 'You LOSE!'
        break;
    }
    playerDisplay.textContent = `Player's choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer's choice: ${computerChoice}`;
    gameResult.textContent = result;
  }
}