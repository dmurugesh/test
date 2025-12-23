let readline = require("readline-sync");
let size = readline.question ("Enter the No. of element to store in Array: ");

const inputArray = [] ;

for (i=0; i<size; i++) {
    inputArray[i] = readline.question("Enter the Element " + (i+1) + " : ");
}
console.log(inputArray);

for (let i =0; i<inputArray.length; i++) {
    if (inputArray[i] % 3 == 0 && inputArray[i] % 5 == 0 ){
        console.log("The value at index " + i + " is " + inputArray[i]);
       } 
}
