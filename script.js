const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissor = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissor = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");
 
const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset all 'selected icon'
function resetSelected(){
  allGameIcons.forEach((icon)=> {
    icon.classList.remove("selected");
  }) ;
  stopConfetti();
  removeConfetti();
}

// Reset score & playerChoice/computerChoice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  playerChoiceEl.textContent = '';
  computerScoreEl.textContent = computerScoreNumber;
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

// Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber <= 0.2)
  {
    computerChoice = 'rock';
  }
  else if(computerChoiceNumber <= 0.4){
    computerChoice = 'paper';
  }
  else if(computerChoiceNumber <= 0.6){
    computerChoice = 'scissors';
  }
  else if(computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  }
  else {
    computerChoice = 'spock';
  }
}

// Add 'selected' styling & compyterChoice
function displayComputerChoice(){
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissor.classList.add("selected");
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Check Result, increase score, update resultText
function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "Its a tie.";
  }
  else{
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent = "You Won";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      playerChoiceEl.textContent = " --- "+playerChoice;
    }
    else{
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber++;
      computerChoiceEl.textContent = " --- "+computerChoice;
    }
  }
}

// Call function to process turn
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice){
  checkResult(playerChoice);
  // Add 'selected' styling $ playerChoice
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = ' --- Rock';   
      break;
    case 'paper':
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = ' --- Paper';   
      break;
    case 'scissors':
      playerScissor.classList.add("selected");
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = ' --- Lizard';    
      break;
    case 'spock':
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = ' --- Spock';
      console.log("spock");
      break;
    default:
      break;
  }
}

// On load set initial value
resetAll();

