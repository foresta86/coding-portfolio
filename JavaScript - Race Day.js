// Generating a random number
let raceNumber = Math.floor(Math.random() * 1000);
// Variable to check if registered early
const registeredEarly = true;
// Variable to set the age
const age = 21;
// Assigning number
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
// Different conditions
if (age > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30am. Your race number is: ${raceNumber}.`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00am. Your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30pm. Your race number is: ${raceNumber}.`);
} else if (age === 18) {
  console.log("Please visit the registration desk for further info.")
}
