// Today's forecast in Kelvin
const kelvin = 0;
// Converting Kelvin to Celsius
const celsius = kelvin - 273;
// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Converting Celsius to Newton
let newton = celsius * (33/100);
// Rounding down the Fahrenheit result
fahrenheit = Math.floor(fahrenheit);
// Rounding down the Newton result
newton = Math.floor(newton);
// Printing the Fahrenheit result
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Printing the Newton result
console.log(`The temperature is ${newton} degrees Newton.`);
