// create two variables to track wins and losses
let userScore = 0;
let computerScore = 0;

// get a random choice between rock paper or scissors with a function
function getComputerChoice () {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*computerChoice.length);
    return (computerChoice[randomChoice]);

}


// get a choice from the user to pick rock paper or scissors with a function
function getUserChoice () {
    let userChoice = prompt('Please enter a choice: Rock, Paper, or Scissors?').toLowerCase();
    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        console.log('Error! Invalid choice!');
        userChoice = prompt('Please enter a valid choice: Rock, Paper, or Scissors?').toLowerCase();
    }
    return userChoice;
}


// take user and computer choices as arguments and pass them through a function that plays a round, increments the score, and announces a winner
function playRound (userChoice, computerChoice) {
    if (userChoice === computerChoice){
        console.log (`It's a tie! ${capitalize(userChoice)} ties ${capitalize(computerChoice)}`);
    }

    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        console.log(`You win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}`);
        userScore += 1;
    } else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}`);
        computerScore += 1;
    }

    // add a point onto the score of the winner
    console.log(`User : ${userScore} Computer : ${computerScore}`);
}

// captialize the first letter in the rock, paper or scissors console.log string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// make a playGame function that calls playRound and limits it to 5 rounds
function playGame (){   

    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        // create variables to assign the user and computer choice to
        const computerSelection = getComputerChoice();
        const humanSelection = getUserChoice();

        // calls the function to play a round and pass the choices into it
        playRound(humanSelection, computerSelection);
    }

    if (userScore > computerScore) {
        console.log ('YOU WIN THE GAME! 🎉')
    }

    else if (userScore === computerScore) {
        console.log ('You tied the game. 🤔')
    }

    else {
        console.log ('You lose the game. 😭')
    }
}

// plays the game!
playGame()