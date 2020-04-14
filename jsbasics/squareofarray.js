let readline = require("readline-sync");
let size = readline.question("Enter the size of Array : ");
let inputArray = [];

for (i =0; i<size; i++) {
 inputArray[i] = readline.question("Enter the " + (i+1) + " Elment: ");
 }
console.log("Enter Array :" + inputArray); 
 
// used to multiple each elment in array and 
inputArray.forEach((value, index) => {
    inputArray[index] *= inputArray[index];
});
console.log(inputArray);