let readline = require("readline-sync");
var inputArray = [];
let size = readline.question("Enter the size of element: ");

for(var i=0; i<size; i++) {
inputArray[i] = readline.question("Enter the Element " + (i+1) + " : ");
}
console.log('Entered values :' + inputArray);
let total=0;
const  summofArray = () => {                                                     //function declared to find sum of array
for (i = 0; i < inputArray.length; i += 1) { 
total = parseInt(total) + parseInt(inputArray[i]);
} 
console.log( ' Sum of Array :' + total);
return total;
}
summofArray();