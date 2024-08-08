const prompt = require('prompt-sync')()

let gameMoves = ["rock", "paper", "scissors"]


console.log("The game moves are", gameMoves)

let winCause = {
  Name: "Rock, Paper, Scissors",
  winPath: "Rock Beats Scissors, Paper beats Rock, Scissors beats Paper"
}

let remind = prompt("Do you need a reminder on which beats which?")

if (remind === "yes") {
  console.log(winCause.winPath)
}

let roundWon = 0;

let playAgain = prompt("The game is set for 3 rounds, Are you ready to play?")
playAgain = playAgain.toLowerCase()

for (let i = 1; i <= 3 && playAgain === "yes"; i++) {

  console.log("Round", i)

  let playChoice = prompt("Pick rock, paper, or scissors:")

  playChoice = playChoice.toLowerCase()

  while (playChoice !== "rock" && playChoice !== "paper" && playChoice !== "scissors") {
    playChoice = prompt("Try again, You didn’t enter a game move")
  }

  function computerChoice() {
    const ranIndex = Math.floor(Math.random() * gameMoves.length);
    return gameMoves[ranIndex]
  }

  let comChoice = computerChoice();

  function winner(playChoice, comChoice) {

    if (playChoice === comChoice) {
      return "The game has ended in a tie!"

    } else if ((playChoice === "rock" && comChoice === "scissors") ||
      (playChoice === "paper" && comChoice === "rock") ||
      (playChoice === "scissors" && comChoice === "paper")) {
      roundWon++
      return "Congrats you won!";
    } else {
      return "You lost!"
    }

  }



  function playGame() {
    let result = winner(playChoice, comChoice)
    console.log(result)
    console.log("You chose", playChoice);
    console.log("The computer chose", comChoice);
    console.log("You've won", roundWon, "out of", i, "rounds")

  }
  playGame();

}
