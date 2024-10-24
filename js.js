
let humanScore = 0;
let computerScore = 0;

/*
    getComputerChoice
        generate a random number between 0 - 3
            if 0 return "rock"
            if 1 return "paper"
            if 2 return "scissors"
*/

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

/*
    getHumanChoice
        ask the user what they choose 
        if they choose something invalid then prompt them again 
        otherwise return either scissors, rock, paper
*/
function getHumanChoice(){
    let userChoice = prompt("What's your move? (scissors, rock, paper)").toLowerCase();

    while (!(userChoice === "scissors" || userChoice === "rock" || userChoice === "paper")){
        alert("Invalid input");
        userChoice = prompt("What's your move? (scissors, rock, paper)").toLowerCase();
    }
    return userChoice;
}

/*
    playRound 
        take in two choices (one from player and one generate from computer)
        compare the two results 
        if one win display or tie
        increment score accordingly 
 */

function playRound(humanChoice, computerChoice){
    console.log(`Human Choice is ${humanChoice}`);
    console.log(`Computer Choice is ${computerChoice}`);
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else {
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            console.log("You win! Scissors beats Paper");
        } else if (humanChoice === 'rock' && computerChoice === 'paper'){
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        } else {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        }
    }
}

/*
    playRound
        keep track of number of rounds
        while the number of rounds if less than 5 continue to play

*/

function playGame(){
    let numRounds = 5
    humanScore = 0
    computerScore = 0


    while (numRounds > 0){ 
        playRound(getHumanChoice(), getComputerChoice());
        numRounds--;
    }

    if (humanScore > computerScore){
        console.log("You're the winner!")
        console.log(`You scores ${humanScore} out of 5`)
    } else {
        console.log("Try again next time!")
        console.log(`You scores ${humanScore} out of 5`)
    }
    
}