
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function getHumanChoice(userChoice){
    return userChoice;
}



function playRound(humanChoice, computerChoice){
    let gameText = document.querySelector('.gameMessage');
    let yourScores = document.querySelector('.yourScores');
    let computerScores = document.querySelector('.computerScores');
    let yourImageChoice = document.querySelector('.yourChoice');
    let computerImageChoice = document.querySelector('.computerChoice');
    yourScores.textContent = 'Your scores: ';
    computerScores.textContent = 'Computer scores: ';
    gameText.innerHTML = ''; // Clear previous message
    yourImageChoice.setAttribute('src', `images/${humanChoice}.png`);
    computerImageChoice.setAttribute('src', `images/${computerChoice}.png`);

    if (humanChoice === computerChoice) {
        gameText.innerHTML += "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        gameText.innerHTML += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        gameText.innerHTML += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    yourScores.textContent += humanScore;
    computerScores.textContent += computerScore;

    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore){
            gameText.innerHTML += (`<br> <p style='color: red;'> You're the winner! <p>`);
        } else {
            gameText.innerHTML += ("<br> <p style='color: red;'> Try again next time! <p>");
        }
        humanScore = 0;
        computerScore = 0;
    }

}



let choiceContainer = document.querySelector('.choiceContainer');

choiceContainer.addEventListener('click', (e) => {
    let target = e.target;
    let choice = target.textContent.toLowerCase();

    switch(target.id) {
        case 'rockChoiceButton':
        case 'paperChoiceButton':
        case 'scissorsChoiceButton':  
        playRound(getHumanChoice(choice), getComputerChoice());
        break;
    }
})

let choiceButton = document.querySelectorAll('button');

choiceButton.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.setAttribute('style', 'background-color: green; color: white; cursor: pointer;')
    });
    button.addEventListener('mouseleave', () => {
        button.setAttribute('style', 'color: black;')
    })
})

