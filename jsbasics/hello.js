var readline = require("readline-sync");
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function modulas(num1, num2) {
  return num1 % num2;
}
function greaterthan(num1, num2) {
  return num1 > num2;
}
function lessthan(num1, num2) {
  return num1 < num2;
}
function isEqual(num1, num2) {
  return num1 === num2;
}
var number1 = readline.question("enter first Number :");
var number2 = readline.question("Enter second Number :");
console.log("added");
console.log(add(number1, number2));
console.log("\n divide :");
console.log(divide(number1, number2));
console.log("\n multiplication :");
console.log(multiply(number1, number2));
console.log("\n substract :");
console.log(substract(number1, number2));
console.log("\n modulas :");
console.log(modulas(number1, number2));
console.log("\n check first number is graterthan second number :");
console.log(greaterthan(number1, number2));
console.log("\n check first number is lessthan second number :");
console.log(lessthan(number1, number2));
console.log("\n check first number is equal to second number :");
console.log(isEqual(number1, number2));