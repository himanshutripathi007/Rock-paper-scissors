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

getHumanChoice = function () {
    enterInput = prompt("Enter R for Rock P for Paper & S for Scissor");
    userInput = enterInput.toUpperCase()
    // Convert letters to actual moves
    if (userInput === "R") {
        return "Rock";
    } else if (userInput === "P") {
        return "Paper";
    } else if (userInput === "S") {
        return "Scissor";
    }
};

// GAME FUNCTION
// Plays 5 rounds automatically

playGame = function () {
    // Score variables (only exist inside playGame)
    let humanScore = 0;
    let computerScore = 0;

    // Function: Play 1 Round
    // Compares choices and updates scores

    playRound = function (humanChoice, computerChoice) {

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

        // If above condition was false → computer wins

        else {
            computerScore++;
            return `Computer wins! ${computerChoice} beats ${humanChoice}`;
        }

    };
    // --- ROUND 1 ---
    console.log("Round 1");
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);


    // --- ROUND 2 ---
    console.log("Round 2");
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    // --- ROUND 3 ---
    console.log("Round 3");
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    // --- ROUND 4 ---
    console.log("Round 4");
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    // --- ROUND 5 ---
    console.log("Round 5");
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    // Final Score Calculation
    console.log(`FINAL SCORE: Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game Over. The Computer won.");
    } else {
        console.log("The game ended in a draw.");
    }
};
// Start the game
playGame()

