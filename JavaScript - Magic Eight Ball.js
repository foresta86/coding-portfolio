// Assigning the username, if not defined will be a stranger
let userName = "" || "Stranger";
// Greeting the user
console.log(`Hello, ${userName}!`);
// Defining the user question
const userQuestion = "Will I be able to learn coding?";
// Printing the user question
console.log(`${userName} asked this: ${userQuestion}`);
// Generating a random number
const randomNumber = Math.floor(Math.random() * 8);
// Creating the reply variable
let eightBall = "";
// Assigning replies based on the random number
switch (randomNumber) {
  case 0:
  eightBall = "Without a doubt.";
  break;
  case 1:
  eightBall = "You may rely on it.";
  break;
  case 2:
  eightBall = "Most likely.";
  break;
  case 3:
  eightBall = "Signs point to yes.";
  break;
  case 4:
  eightBall = "Ask again later.";
  break;
  case 5:
  eightBall = "Cannot predict now.";
  break;
  case 6:
  eightBall = "My sources say no.";
  break;  
  case 7:
  eightBall = "Very doubtful.";
  break;          
}
// Printing the final reply
console.log(`${userName}, the reply to your question is: ${eightBall}`);
