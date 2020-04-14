/*
let readline = require("readline-sync");
let size = readline.question("Enter the size of element: ");
let inputArray = [];

for (var i=0; i<size; i++) {                                             //Taking Input from user
    inputArray[i] = readline.question('Enter Element: ');
    }
console.log(inputArray);

*/

let readline = require("readline-sync");
let size = readline.question ("Enter the No. of element to store in Array: ");

const inputArray = [];
for (i=0; i<size; i++) {
    inputArray[i] = readline.question("Enter the Element " + (i+1) + " : ");
}
console.log(inputArray);



