// two variables to track wins and losses
let userScore = 0;
let computerScore = 0;
// two variables to track rounds played and the max rounds
let roundsPlayed = 0;
const totalRounds = 5;
// set the score text at the start of loading the page
document.getElementById('score').textContent = 'User: 0 | Computer: 0';

// get a random choice between rock paper or scissors with a function
function getComputerChoice () {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*computerChoice.length);
    return (computerChoice[randomChoice]);

}

// take user and computer choices as arguments and pass them through a function that plays a round, increments the score, and announces a winner
function playRound (userChoice, computerChoice) {
    roundsPlayed++; // increment the rounds played

    let resultMessage; // variable to show message of round win or loss

    // includes logic of the game whether its a win, loss, or tie
    if (userChoice === computerChoice){
        resultMessage = `It's a tie! ${capitalize(userChoice)} ties ${capitalize(computerChoice)}`;
    }

    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        resultMessage = `You win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}`;
        userScore += 1;
    } else {
        resultMessage = `You lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}`;
        computerScore += 1;
    }

    // update result and score on the page
    document.getElementById('result').textContent = resultMessage;
    document.getElementById('score').textContent = `User: ${userScore} | Computer: ${computerScore}`;

    // determine the animation to apply based on the result
    let userImg = document.getElementById(`${userChoice}Img`);
    let computerImg = document.getElementById(`${computerChoice}Img`);

    // remove previous animations
    userImg.classList.remove('animateCrush', 'animateCover', 'animateCut');
    computerImg.classList.remove('animateCrush', 'animateCover', 'animateCut');

    // apply animation classes and sounds if you win
    if (resultMessage.includes('win')) {
        if (userChoice === 'rock' && computerChoice === 'scissors') {
            userImg.classList.add('animateCrush');
            playSound('rock');
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            userImg.classList.add('animateCover');
            playSound('paper');
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            userImg.classList.add('animateCut');
            playSound('scissors');
        }
    }

    if (checkGameOver()) {
        displayResults();
    }

}

// captialize the first letter in the rock, paper or scissors string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// checks if the game should continue or not
function checkGameOver() {

    if (roundsPlayed >= totalRounds) {
        return true; // game over
    }
    return false; // game continues

}

// displays the final message
function displayResults() {
    let finalMessage;

    if (userScore > computerScore) {
        finalMessage = 'YOU WIN THE GAME! 🎉';
    } else if (userScore === computerScore) {
        finalMessage = 'You tied the game. 🤔';
    } else {
        finalMessage = 'You lose the game. 😭';
    }

    // update the final result message on the page
    document.getElementById('result').textContent = finalMessage;
}

// takes the sound file and plays it with function
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.wav`); // path to the sound file
    audio.play();
}

// resets the scores, rounds played, and text content on the page
function resetGame () {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = 'User: 0 | Computer: 0';
}

// inputs rock as userChoice and plays a round with the HTML button if game is not over with checkGameOver function
document.getElementById('rock').addEventListener('click', () => {
    if (!checkGameOver()) {
    playRound('rock', getComputerChoice());
}
})

// inputs paper as userChoice and plays a round with the HTML button if game is not over with checkGameOver function
document.getElementById('paper').addEventListener('click', () => {
    if (!checkGameOver()) {
    playRound('paper', getComputerChoice());
}
})

// inputs scissors as userChoice and plays a round with the HTML button if game is not over with checkGameOver function
document.getElementById('scissors').addEventListener('click', () => {
    if (!checkGameOver()) {
    playRound('scissors', getComputerChoice());
}
})

// resets the game with the HTML button and resetGame function
document.getElementById('reset').addEventListener('click', () => resetGame());
