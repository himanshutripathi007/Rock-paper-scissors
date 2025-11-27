// Score variables (only exist inside playGame)
let humanScore = 0;
let computerScore = 0;
let round =0;

const rockBtn=document.querySelector("#rock-btn");
const paperBtn=document.querySelector("#paper-btn");
const scissorBtn=document.querySelector("#Scissor-btn"); /*this is correct */
const div=document.querySelector("#result");
const resultDataDive=document.querySelector("#result-data")
const restartBtn = document.querySelector("#restart-btn");



// Function: Computer Choice
getComputerChoice = function () {
    // Generate a random number between 0 and 2
    let randomNumber = Math.random();
    let newRandomNumber = (randomNumber * 3);
    let floorNumber = Math.floor(newRandomNumber);

    // Map random number to Rock, Paper, Scissor

    if (floorNumber === 0) {
        return "Rock";
    } else if (floorNumber == 1) {
        return "Paper";
    } else if (floorNumber == 2) {
        return "Scissor";
    }

};

// Function: Human Choice (Prompt)




const playRound = function (humanChoice, computerChoice) {

    // If choices are same → tie
    if (humanChoice === computerChoice) {
        return "TIE!";
    }

    // Winning logic for human
    if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }

    // Otherwise → computer wins
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${humanChoice}`;
};

function announceWinner() {
    if (humanScore > computerScore) {
        div.textContent = " YOU WON THE GAME!";
    } else if (computerScore > humanScore) {
        div.textContent = " COMPUTER WINS THE GAME!";
    } else {
        div.textContent = " It's a TIE GAME!";
    }
}


const getHumanChoice = function () {

    rockBtn.addEventListener("click", () => {

        if (round >= 5) {
        announceWinner();
        return;
    }

        let result =playRound("Rock", getComputerChoice());
        div.textContent=result;
        // console.log(result);
        round++;  
        resultDataDive.innerHTML = `<p>Human: ${humanScore} | Computer: ${computerScore}</p>`;


        
    });

    paperBtn.addEventListener("click", () => {
        if (round >= 5) {
        announceWinner();
        return;
    }

        let result=playRound("Paper", getComputerChoice());
        div.textContent=result;
        // console.log(result);
        round++; 
        resultDataDive.innerHTML = `<p>Human: ${humanScore} | Computer: ${computerScore}</p>`;

    });

    scissorBtn.addEventListener("click", () => {
        if (round >= 5) {
        announceWinner();
        return;
    }

        let result=playRound("Scissor", getComputerChoice());
        div.textContent=result;
        // console.log(result);
        round++; 
        resultDataDive.innerHTML = `<p>Human: ${humanScore} | Computer: ${computerScore}</p>`;

    });

};

getHumanChoice()
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    div.textContent = "Game restarted! Make your move.";
    resultDataDive.innerHTML = `<p>Human: 0 | Computer: 0</p>`;
}
restartBtn.addEventListener("click", resetGame);














