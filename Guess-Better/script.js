let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



 
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
 
//console.log(generateTarget());
 
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  // steps to do this
  //we need to first determine the distace between humanGuess and computerGuess.
  // create a variable that shows the difference between the human guess and the targetGuess
  //we use math.abs to get the whole number or the exact.
  const humanDifference = Math.abs(humanGuess - targetGuess);
  const computerDifference = Math.abs(computerGuess - targetGuess);
  //now we can make the condition for the distance
  // in the task if only ask for if the human wins return true and false if computer wins
  // so it says ig human guess is less then computer Guess print
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};
 
const updateScore = winner => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};
 
const advanceRound = () => {
  currentRoundNumber++;
};